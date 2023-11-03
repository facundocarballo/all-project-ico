import User from "../types/user";
import { signInWithCredential, getAuth, GoogleAuthProvider } from '@firebase/auth';

export const USER_TOKEN_KEY = "all-project-token";

export const trySiginWithCredential = async ():Promise<User|undefined> => {
    const token = await User.GetToken();
    if (token === undefined) return;

    try {
        const credential = GoogleAuthProvider.credential(null, token);
        const userCredential = await signInWithCredential(getAuth(), credential);
        const user = userCredential.user;
        const theUser = await User.CreateUserWithCredential(user);
        return theUser;
    }catch(err) {
        console.error("Error trying to sigin with credential. ", err);
    }
};