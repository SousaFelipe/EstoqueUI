

export interface IUser {
    email?: string
    token?: string
}


export interface IContext extends IUser {
    auth: boolean,
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => void
}


export interface IAuthProvider {
    children: JSX.Element
}
