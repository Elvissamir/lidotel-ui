import { useState } from 'react'
import { ControlAction, GraphDataItem } from '../core/interfaces/graphs'

interface UseGraphDataControlsProps {
    graphData: GraphDataItem[]
}

const useGraphDataControls = ({ graphData }: UseGraphDataControlsProps) => {
    const [data, setData] = useState<GraphDataItem[]>([...graphData])

    const handleDataChange = (index: number, action: ControlAction, dataKey: string) => {
      console.log(index, action, dataKey)
  
      const ndata = [...data]
      if (action === 'increase') ndata[index][dataKey] += 1
      else ndata[index][dataKey] -= 1
  
      console.log(ndata)
  
      setData(ndata)
    }

    return {
        data,
        handleDataChange
    }
}

export default useGraphDataControls