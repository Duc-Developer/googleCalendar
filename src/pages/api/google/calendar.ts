import { google } from 'googleapis';
import { oauth2Client } from '.';
const calendar = google.calendar({
    version: "v3",
    auth: process.env.GG_API_KEY
})
export default async function handler(req: any, res: any) {
    try {
        const eventConfigs = [{
            calendarId: 'ductt2@vmogroup.com',
            auth: oauth2Client,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        },
        {
            calendarId: 'primary',
            auth: oauth2Client,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: 'startTime',
        }
        ];
        const responses = await Promise.all(eventConfigs.map(config => calendar.events.list(config)));
        res.status(200).json(responses.map(response => ({
            data: response.data,
            status: response.status
        })))
    } catch (error: any) {
        res.status(error?.status ?? 400).json({ message: error?.message })
    }
}