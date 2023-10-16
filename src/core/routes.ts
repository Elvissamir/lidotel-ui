import { Route } from "lidotel-ui"

interface AppRoute {
    home: Route
    users: Route
    hosts: Route
    rooms: Route
    delivery: Route 
    authCallback: Route
    notFound: Route
}

const routes: AppRoute = {
    home: { url: '/', name: "Inicio" },
    users: { url: '/usuarios', name: "Usuarios" },
    hosts: { url: '/huespedes', name: "Huespedes" },
    rooms: { url: '/habitaciones', name: "Habitaciones" },
    delivery: { url: '/delivery', name: "Delivery" },
    authCallback: { url: '/callback', name: 'Auth Callback' },
    notFound: { url: '/not-found', name: 'Not Found' }
}

export default routes