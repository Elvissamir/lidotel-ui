import { Navigate, Route } from "react-router"
import { Routes } from "react-router-dom"
import routes from "../../core/routes"
import HomePage from "../pages/HomePage"
import ErrorPageContainer from "../layout/ErrorPageContainer"
import RoomsPage from "../pages/RoomsPage"
import HostsPage from "../pages/HostsPage"
import UsersPage from "../pages/UsersPage"
import DeliveryPage from "../pages/DeliveryPage"
import RoomPage from "../pages/RoomPage"
import GuestPage from "../pages/GuestPage"
import UserPage from "../pages/UserPage"
import OrdersPage from "../pages/OrdersPage"
import OrderPageContent from "../pages/OrderPageContent"
import GuestRoomPage from "../pages/GuestRoomPage"

const AppRouter = () => {
    return (
        <Routes>
            <Route path={routes.home.url} element={<HomePage />} />
            <Route path={routes.rooms.url} element={<RoomsPage /> } />
            <Route path={`${routes.room.url}/:id`} element={<RoomPage />} />
            <Route path={routes.hosts.url} element={<HostsPage />} />
            <Route path={`${routes.hosts.url}/:id`} element={<GuestPage />} />
            <Route path={routes.users.url} element={<UsersPage />} />
            <Route path={`${routes.users.url}/:id`} element={<UserPage />} />
            <Route path={`${routes.orders.url}`} element={<OrdersPage />} />
            <Route path={`${routes.orders.url}/:id`} element={<OrderPageContent />} />
            <Route path={routes.delivery.url} element={<DeliveryPage />} />
            <Route path={`${routes.guestRoom.url}/:id`} element={<GuestRoomPage />} />
            <Route path={routes.notFound.url} element={<ErrorPageContainer status="404" />} />
            <Route path='/' element={<Navigate to={routes.home.url} replace={true} />} />
            <Route path='*' element={<Navigate to={routes.notFound.url} replace={true} />} />
        </Routes>
    )
}

export default AppRouter