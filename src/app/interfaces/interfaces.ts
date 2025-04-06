export interface DocumentType {
    name: string;
    code: string;
  }
  
export interface Country {
    name: string;
    code: string;
  }
export interface Client {
    id: number,
    name: string,
    lastname: string,
    IDType: DocumentType,
    IDNumber: number,
    Country: Country,
    foreing: boolean
}