import { SideBarMenuItemData } from "lidotel-ui/dist/components/layout/SideBar"
import { createContext, useState } from "react"
import { FaUser } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { TbDoor } from "react-icons/tb"
import { BiSolidUserPin } from 'react-icons/bi'
import { MdDeliveryDining, MdOutlineBookmarkBorder } from 'react-icons/md'
import { useNavigate } from "react-router-dom"
import routes from "../core/routes"

type SideBarItemType = "home" | "users" | "hosts" | "rooms" | "orders" | "delivery"

interface SideBarContextData {
    items: SideBarMenuItemData[]
    selectedItemId: SideBarItemType
    onChangeSelectedItem: (id: string) => void
}

const items: SideBarMenuItemData[] = [
    { text: 'Inicio', id: 'home', icon: <HiHome /> },
    { text: 'Usuarios', id: 'users', icon: <FaUser /> },
    { text: 'Huespedes', id: 'hosts', icon: <BiSolidUserPin /> },
    { text: 'Habitaciones', id: 'rooms', icon: <TbDoor /> },
    { text: "Ordenes", id: "orders", icon: <MdOutlineBookmarkBorder /> },
    { text: 'Pedidos', id: 'delivery', icon: <MdDeliveryDining /> }
]

const SideBarContext = createContext<SideBarContextData>({
    items,
    selectedItemId: 'home',
    onChangeSelectedItem: (id: string) => console.log('id', id)
})

interface SideBarContextProviderProps {
    children: JSX.Element | JSX.Element[]
}

const SideBarContextProvider = ({ children }: SideBarContextProviderProps) => {
    const navigate = useNavigate()
    const [selectedItemId, setSelectedItemId] = useState<SideBarItemType>("home")

    const onChangeSelectedItem = (id: string) => {
        setSelectedItemId(id as SideBarItemType)

        if (id === "users")
           return navigate(routes.users.url)
        else if (id === 'hosts')
            return navigate(routes.hosts.url)
        else if (id === 'rooms')
            return navigate(routes.rooms.url)
        else if (id === 'orders')
            return navigate(routes.orders.url)
        else if (id === 'delivery')
            return navigate(routes.delivery.url)

        return navigate(routes.home.url)
    }

    return (
        <SideBarContext.Provider value={{ 
            selectedItemId, 
            items: items, 
            onChangeSelectedItem 
        }}>
            {children}
        </SideBarContext.Provider>
    )
}

export {
    SideBarContext,
    SideBarContextProvider
}