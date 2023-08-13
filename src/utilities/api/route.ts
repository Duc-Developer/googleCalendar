export const redirectGOauth = (res: any) => {
    res?.redirect(`${process.env.APP_URL}/api/google/token`);
};