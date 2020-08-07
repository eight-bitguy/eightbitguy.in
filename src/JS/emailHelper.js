import emailJs from 'emailjs-com';

const SERVICE_ID = 'sandalj6_gmail_com';
const TEMPLATE_ID = 'template_qOacbz7E';
const USER_ID = 'user_wzCrSBH9l8Ag8Yeai6xtp';

class EmailHelper {


    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }

    async sendEmail() {
        const data = {
            name: this.name,
            email: this.email,
            message: this.message
        };
        try {
            await emailJs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then();
        } catch (e) {
            console.log(e);
        }
    }
}

export default EmailHelper;
