import { User as FirebaseUser } from "@firebase/auth";
import { USER_TOKEN_KEY } from "../handlers/google";

class User {
    id: string;
    email: string | null;
    display_name: string | null;
    phone_number: string | null;
    photoURL: string | null;
    token?:string;

    constructor (user: FirebaseUser) {
        this.id = user.uid;
        this.email = user.email;
        this.display_name = user.displayName;
        this.phone_number = user.phoneNumber;
        this.photoURL = user.photoURL;
    }

    static async GetToken(): Promise<string|null> {
        return localStorage.getItem(USER_TOKEN_KEY);
    }

    static async CreateUserWithCredential(
        user: any
    ): Promise<User> {
        const newUser = new User(user);
        return newUser;
    }

    async SaveToken(accessToken: string): Promise<undefined> {
        try {
            localStorage.setItem(USER_TOKEN_KEY, accessToken);
            this.token = accessToken;
        }catch (err) {
            console.error("Error saving the token in storage ", err);
         }
    }
}

export default User;