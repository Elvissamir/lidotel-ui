import { Navigate, Route } from "react-router"
import { Routes } from "react-router-dom"
import routes from "../../core/routes"
import HomePage from "../pages/HomePage"
import CallbackRouter from "./CallbackRouter"
import ErrorPageContainer from "../layout/ErrorPageContainer"
import RoomsPage from "../pages/RoomsPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.url} element={<HomePage />} />
            <Route path={routes.rooms.url} element={<RoomsPage /> } />
            <Route path={routes.authCallback.url} element={<CallbackRouter />} />
            <Route path={routes.notFound.url} element={<ErrorPageContainer status="404" />} />
            <Route path='/' element={<Navigate to={routes.home.url} replace={true} />} />
            <Route path='*' element={<Navigate to={routes.notFound.url} replace={true} />} />
        </Routes>
    )
}

export default AppRouter