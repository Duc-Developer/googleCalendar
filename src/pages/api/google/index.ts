import { oauth2Client } from '..';
const scopes = [
    'https://www.googleapis.com/auth/calendar'
];
export default async function handler(req: any, res: any) {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        include_granted_scopes: true
    });
    res.redirect(url);
}