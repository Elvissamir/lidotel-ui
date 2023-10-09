import { useContext } from "react"
import { LidotelAuthDataContext } from "lidotel-ui"
import Page from "./Page"
import SortedTablePageContent from "./SortedTablePageContent"

const TablePage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading='Tables'
            title='Tables'>
                <SortedTablePageContent />
        </Page>
    )
}

export default TablePage