/**
 * Message model
 */
export default class Message {
    email = null;
    message = null;
    name = null;

    set(attribute, value) {
        this[attribute] = value;
    }

    validate() {
        return this.message && this.email && this.name;
    }

    get(attribute) {
        return this[attribute];
    }

    toJson() {
        return {
            email: this.email,
            name: this.name,
            message: this.message,
        };
    }
}
