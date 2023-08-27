import { google } from 'googleapis';
import { oauth2Client } from '.';
const calendar = google.calendar({
    version: "v3",
    auth: process.env.GG_API_KEY
})
export default async function handler(req: any, res: any) {
    try {
        const { start, end, limit = 200 } = req.query;
        if (!start || !end) {
            throw new Error();
        }
        const eventConfigs = [{
            calendarId: 'ductt2@vmogroup.com',
            auth: oauth2Client,
            timeMin: new Date(parseInt(start)).toISOString(),
            timeMax: new Date(parseInt(end)).toISOString(),
            maxResults: parseInt(limit),
            singleEvents: true,
            orderBy: 'startTime',
        },
        {
            calendarId: 'primary',
            auth: oauth2Client,
            timeMin: new Date(parseInt(start)).toISOString(),
            timeMax: new Date(parseInt(end)).toISOString(),
            maxResults: parseInt(limit),
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