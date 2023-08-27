import { redirectGOauth } from '@/utilities/api/route';
import { oauth2Client } from '..'
export default async function handler(req: any, res: any) {
    try {
        const code = req.query.code;
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        res.redirect(`${process.env.APP_URL}/calendar`);
    } catch (error: any) {
        redirectGOauth(res);
    }
}