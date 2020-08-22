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
                window._env_.EMAIL_SERVICE_ID,
                window._env_.EMAIL_TEMPLATE_ID,
                this.messageInfo.toJson(),
                window._env_.EMAIL_USER_ID
            ).then();
        } catch (e) {
            console.log(e);
        }
    }
}

export default EmailHelper;
