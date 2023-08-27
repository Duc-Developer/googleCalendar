'use-client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useEffect, useState } from 'react';
import { CONFIGURATIONS } from '@/constants';
import { DatesSetArg } from '@fullcalendar/core/index.js';

const EVENT_BG_COLORS: { [key in number]: string } = {
    0: '#2ab7ca',
    1: '#fed766'
}
export default function Calendar() {
    const [events, setEvents] = useState<any[]>([]);
    const [errors, setErrors] = useState({ message: '' });
    const [dates, setDates] = useState({ start: 0, end: 0, limit: 100 });
    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch(`${CONFIGURATIONS.APP_URL}/api/google/calendar?start=${dates.start}&end=${dates.end}&limit=${dates.limit}`);
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
        if (dates.start > 0 && dates.end > 0) fetchEvents();
    }, [dates]);

    const handleChangeDate = (dateInfo: DatesSetArg) => {
        const { start, end } = dateInfo;
        const newDates = {
            ...dates,
            start: start.getTime(),
            end: end.getTime(),
        };
        setDates(newDates);
    };

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
                datesSet={handleChangeDate}
                firstDay={1}
            />
        </div>
    )
}
