export interface Bill {
    billId: string 
    visitId: string
    details: BillDetails[]
}   

export interface BillDetails {
    detailId: string 
    item: string
    price: number  
}