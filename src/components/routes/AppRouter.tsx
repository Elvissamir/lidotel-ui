import { Navigate, Route } from "react-router"
import { Routes } from "react-router-dom"
import routes from "../../core/routes"
import HomePage from "../pages/HomePage"
import CallbackRouter from "./CallbackRouter"
import TablePage from "../pages/TablePage"
import FormsPage from "../pages/FormsPage"
import NotFoundPageContainer from "../pages/NotFoundPageContainer"
import GraphsPage from "../pages/GraphsPage"
import EmailPage from "../pages/EmailsPage"
import NotificationsPage from "../pages/NotificationsPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.url} element={<HomePage />} />
            <Route path={routes.tables.url} element={<TablePage />} />
            <Route path={routes.forms.url} element={<FormsPage />} />
            <Route path={routes.graphs.url} element={<GraphsPage />} />
            <Route path={routes.emails.url} element={<EmailPage />} />
            <Route path={routes.notifications.url} element={<NotificationsPage />} />
            <Route path={routes.authCallback.url} element={<CallbackRouter />} />
            <Route path={routes.notFound.url} element={<NotFoundPageContainer />} />
            <Route path='/' element={<Navigate to={routes.home.url} replace={true} />} />
            <Route path='*' element={<Navigate to={routes.notFound.url} replace={true} />} />
        </Routes>
    )
}

export default AppRouter