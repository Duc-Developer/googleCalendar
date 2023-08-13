'use-client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useEffect, useState } from 'react';

const EVENT_BG_COLORS: { [key in number]: string } = {
    0: '#2ab7ca',
    1: '#fed766'
}
export default function Calendar() {
    const [events, setEvents] = useState<any[]>([]);
    const [errors, setErrors] = useState({ message: '' });
    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch(`http://localhost:3000/api/google/calendar`);
                const data = await response.json();
                const newEvents: any[] = [];
                data?.forEach((dataItem: any, index: number) => {
                    dataItem.data.items.forEach((eventItem: any) => {
                        const { start, end } = eventItem;
                        const startTime = start.dateTime;
                        const endTime = end.dateTime;
                        newEvents.push({
                            id: eventItem.id,
                            url: eventItem.htmlLink,
                            title: eventItem?.summary ?? 'Meeting',
                            start: startTime,
                            end: endTime,
                            groupId: dataItem.summary,
                            extendedProps: {
                                status: 'done'
                            },
                            display: 'block',
                            borderColor: '#f4f4f8',
                            backgroundColor: EVENT_BG_COLORS[index]
                        });
                    });
                });
                setEvents(newEvents);
            } catch (error: any) {
                setErrors({ message: 'Something was wrong!' })
            }
        };
        fetchEvents();
    }, []);

    if (errors?.message) return <p className='text-center text-red-600 font-bold text-lg'>
        {errors?.message}
    </p>;
    return (
        <div className='p-4 h-screen'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    meridiem: false
                }}
                lazyFetching
                eventClick={(info) => {
                    info.jsEvent.preventDefault(); // don't let the browser navigate

                    if (info.event.url) window.open(info.event.url);
                }}
                height='100%'
            />
        </div>
    )
}
