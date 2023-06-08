const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@(gmail.com|vku.udn.vn)$/i.test(email);
export {
    isEmail
}