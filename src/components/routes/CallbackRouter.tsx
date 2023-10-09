import { useAuth } from "lidotel-ui"
import { Navigate } from "react-router-dom"
import routes from "../../core/routes"

const CallbackRouter = () => {
    const auth = useAuth()

    if (auth.isAuthenticated) 
        return <Navigate to={routes.home.url} replace={true} />

    return null
}

export default CallbackRouter