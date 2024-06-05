export interface IBoardData {
    id: number
    name: string
    tickets: ITicket[]
}

export interface ITicket {
    containerid?: number
    id?: number
    name: string
    description: string
}