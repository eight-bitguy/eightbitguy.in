import emailJs from 'emailjs-com';

/**
 * Email helper class
 */
class EmailHelper {

    /**
     * Constructor
     *
     * @param messageInfo
     */
    constructor(messageInfo) {
        this.messageInfo = messageInfo;
    }

    /**
     * send email
     *
     * @returns {Promise<void>}
     */
    async sendEmail() {
        try {
            await emailJs.send(
                process.env.EMAIL_SERVICE_ID,
                process.env.EMAIL_TEMPLATE_ID,
                this.messageInfo.toJson(),
                process.env.EMAIL_USER_ID
            ).then();
        } catch (e) {
            console.log(e);
        }
    }
}

export default EmailHelper;
