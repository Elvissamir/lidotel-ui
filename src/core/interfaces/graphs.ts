export interface GraphDataItem {
    name: string 
    uv?: number 
    pv?: number 
    amt: number
  }
  
export type ControlAction = 'increase' | 'decrease'
  