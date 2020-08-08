import emailJs from 'emailjs-com';

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
            await emailJs.send(
                window._env_.EMAIL_SERVICE_ID,
                window._env_.EMAIL_TEMPLATE_ID,
                data,
                window._env_.EMAIL_USER_ID
            ).then();
        } catch (e) {
            console.log(e);
        }
    }
}

export default EmailHelper;
