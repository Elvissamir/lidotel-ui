import { useContext } from "react"
import { LidotelAuthDataContext } from "lidotel-ui"
import FormsPageContent from "./FormsPageContent"
import Page from "./Page"

const TablePage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <Page 
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading='Forms'
            title='Forms'>
                <FormsPageContent />
        </Page>
    )
}

export default TablePage