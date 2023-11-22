export type ComplaintType = "Security" | "Resources" | "Services"

export interface Complaint {
    complaintId: string 
    roomId: string 
    description: string 
    type: ComplaintType
}