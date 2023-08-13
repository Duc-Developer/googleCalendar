import { google } from 'googleapis';
import axios from 'axios';

export const oauth2Client = new google.auth.OAuth2(
    process.env.GG_CLIENT_ID,
    process.env.GG_CLIENT_SECRET,
    `${process.env.APP_URL}/api/google/token`
);

const scopes = [
    'https://www.googleapis.com/auth/calendar'
];
export default async function handler(req: any, res: any) {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
    });
    res.redirect(url);
}