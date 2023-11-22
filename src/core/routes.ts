import { Route } from "lidotel-ui"

interface AppRoute {
    home: Route
    users: Route
    hosts: Route
    rooms: Route
    bills: Route
    orders: Route
    guestRoom: Route
    room: Route
    delivery: Route 
    authCallback: Route
    notFound: Route
}

const routes: AppRoute = {
    guestRoom: { url: '/habitaciones', name: "Huésped" },
    home: { url: '/internal', name: "Inicio" },
    users: { url: '/internal/usuarios', name: "Usuarios" },
    hosts: { url: '/internal/huespedes', name: "Huespedes" },
    rooms: { url: '/internal/habitaciones', name: "Habitaciones" },
    bills: { url: '/internal/facturas', name: 'Facturas' },
    orders: { url: '/internal/ordenes', name: "Ordenes" },
    room: { url: '/internal/habitacion', name: "Habitacion" },
    delivery: { url: '/internal/delivery', name: "Delivery" },
    authCallback: { url: '/internal/callback', name: 'Auth Callback' },
    notFound: { url: '/internal/not-found', name: 'Not Found' }
}

export default routes