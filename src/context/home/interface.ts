import User from "../../types/user";

export interface IHomeContext {
    // Attributes
    user?: User,

    // React useState Methods
    setUser: (_user: User|undefined) => void,

    // Methods
};