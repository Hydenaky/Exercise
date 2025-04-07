export interface DocumentType {
  name: string,
  code: string
}

export interface Country {
  name: string,
  code: string
}
export interface Client {
  id: number,
  Name: string,
  Lastname: string,
  IDType: DocumentType,
  IDNumber: number,
  Country: Country,
  foreing: boolean
}
export interface ModalClient {
  client: Client,
  avaliable: boolean
}