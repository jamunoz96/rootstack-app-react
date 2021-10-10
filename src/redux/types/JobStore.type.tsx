export default interface JobStore {
    current_page: number,
    data: object[],
    last_page: number,
    total: number
}