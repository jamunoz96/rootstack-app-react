export default interface AuthStore {
    user: any,
    token: string | null,
    isAuthed: boolean,
    errorMessage: string | null
    isLoading: boolean
}