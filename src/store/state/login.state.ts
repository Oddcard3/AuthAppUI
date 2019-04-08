export interface ILoginState {
    user: string;
    token: string;
    loggedIn: boolean;
    inProgress: boolean;
    invalidCreds: boolean;
    error: string; // null if no error OR invalidCreds == true, it's any other error excepting invalid credentials
}

export const initialLoginState: ILoginState = {
    user: null,
    token: null,
    loggedIn: false,
    inProgress: false,
    invalidCreds: false,
    error: null
};