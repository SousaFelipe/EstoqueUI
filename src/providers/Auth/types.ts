

export interface IUser {
    id?: number
    name?: string
    email?: string
    token?: string
}


export interface IContext extends IUser {
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => void
}


export interface IAuthProvider {
    children: JSX.Element
}
