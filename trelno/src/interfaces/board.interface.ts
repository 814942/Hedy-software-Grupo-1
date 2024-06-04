export interface IBoardData {
    id: number
    name: string
    tickets: ITicket[]
}

export interface ITicket {
    id: number
    title: string
    description: string
}