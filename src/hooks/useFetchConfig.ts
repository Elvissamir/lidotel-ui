import { useEffect, useState } from "react"
import { LidotelAppConfig } from "lidotel-ui"

interface UseFetchAppAuthConfig {
    env: string | undefined
    serverMode: string | undefined
}

const configUri = `${import.meta.env.BASE_URL}config.json`

interface FetchConfigParams {
    env: string | undefined
    serverMode: string | undefined
}

const fetchConfig = async ({ env, serverMode }: FetchConfigParams) => {
    const serveMode = serverMode && serverMode[serverMode.length - 1] === ""? serverMode.substring(0, serverMode.length - 1) : serverMode

    let uri = ''

    if (env) {
        if (serveMode === 'node') 
            uri = configUri
        else 
            uri = '/local.config.json'
    }
    else {
        uri = configUri
    }

    const configData = await fetch(uri)
    const config = await configData.json()

    return config
}

export const mapEdxToAppConfig = (LidotelConfig): LidotelAppConfig => {
    const authConfig: LidotelAppConfig = {
        title: LidotelConfig.app.subtitle,
        appName: LidotelConfig.app.subtitle,
        api: LidotelConfig.api.baseUri,
        basePath: LidotelConfig.app.basePath,
        ...LidotelConfig.auth
    }

    return authConfig
}

const useFetchConfig = ({ env, serverMode }: UseFetchAppAuthConfig) => {
    const [appConfig, setAppConfig] = useState<LidotelAppConfig | null>(null)

    const fetchAppConfig = async () => {
        const LidotelConfig = await fetchConfig({ env, serverMode })

        setAppConfig(mapEdxToAppConfig(LidotelConfig))
    }

    useEffect(() => {
        fetchAppConfig()
    }, [])

    return {
        appConfig
    }
}

export default useFetchConfig