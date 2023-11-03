class User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;

    constructor (_id: string, _email: string, _first_name: string, _last_name: string, _phone_number: string) {
        this.id = _id;
        this.email = _email;
        this.first_name = _first_name;
        this.last_name = _last_name;
        this.phone_number = _phone_number;
    }
}

export default User;