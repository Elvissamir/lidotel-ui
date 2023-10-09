import { useContext } from "react"
import { LidotelAuthDataContext } from "lidotel-ui"
import GraphsPageContent from "./GraphsPageContent"
import Page from "./Page"

const GraphsPage = () => {
    const { LidotelAppConfig } = useContext(LidotelAuthDataContext)

    return (
        <Page
            appName={LidotelAppConfig? LidotelAppConfig.app.subtitle as string : ''}
            heading='Graphs'
            title='Graphs'>
                <GraphsPageContent />
        </Page>
    )
}

export default GraphsPage