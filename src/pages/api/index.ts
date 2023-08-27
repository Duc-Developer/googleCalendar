import { google } from 'googleapis';

export const oauth2Client = new google.auth.OAuth2(
    process.env.GG_CLIENT_ID,
    process.env.GG_CLIENT_SECRET,
    `${process.env.APP_URL}/api/google/token`
);

export default async function handler(req: any, res: any) {
    res.status(200).json('Welcome to Api');
}