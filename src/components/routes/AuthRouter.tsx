import { Navigate, useLocation } from "react-router-dom"
import routes from "../../core/routes"

interface AuthRouterParams {
    dest: JSX.Element
}

const AuthRouter = ({ dest }: AuthRouterParams) => {
    const location = useLocation()

    if (location.pathname === routes.authCallback.url)
        return <Navigate to={routes.home.url}  />
    
    return { dest }
}

export default AuthRouter