import { Route } from "lidotel-ui"

interface AppRoute {
    home: Route
    app: Route 
    tables: Route 
    forms: Route
    graphs: Route
    emails: Route
    notifications: Route
    authCallback: Route
    notFound: Route
}

const routes: AppRoute = {
    home: { url: '/', name: 'Home' },
    app: { url: '/app', name: 'App' },
    tables: { url: '/tables', name: 'Tables' },
    forms: { url: '/forms', name: 'Forms' },
    graphs: { url: '/graphs', name: 'Graphs' },
    emails: { url: '/emails', name: 'Emails' },
    notifications: { url: '/notifications', name: 'Notifications' },
    authCallback: { url: '/callback', name: 'Auth Callback' },
    notFound: { url: '/not-found', name: 'Not Found' }
}

export default routes