import { Navigate } from "react-router-dom"
import routes from "../../core/routes"

const CallbackRouter = () => {
    return <Navigate to={routes.home.url} replace={true} />
}

export default CallbackRouter