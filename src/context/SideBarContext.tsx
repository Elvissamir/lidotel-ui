import { BellIcon, EmailIcon } from "@chakra-ui/icons";
import { SideBarMenuItemData } from "lidotel-ui/dist/components/layout/SideBar";
import { createContext, useContext, useState } from "react";
import { AiOutlineTable } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import routes from "../core/routes";
import { StarterAppContext } from "./StarterAppContext";

type SideBarItemType = "tables" | "forms" | "graphs" | "home" | "emails" | "notifications"

interface SideBarContextData {
    items: SideBarMenuItemData[]
    selectedItemId: SideBarItemType
    onChangeSelectedItem: (id: string) => void
}

const items: SideBarMenuItemData[] = [
    { text: 'Home', id: 'home', icon: <HiHome /> },
    { text: 'Tables', id: 'tables', icon: <AiOutlineTable /> },
    { text: 'Forms', id: 'forms', icon: <FaWpforms /> },
    { text: 'Graphs', id: 'graphs', icon: <GoGraph /> },
    { text: 'Emails', id: "emails", icon: <EmailIcon /> },
    { text: "Notifications", id: 'notifications', icon: <BellIcon /> }
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
    const starterConfig = useContext(StarterAppContext)

    const shouldShowEmailItem = (item: SideBarMenuItemData) => {
        if (item.id === 'emails') {
            if (starterConfig.showEmailPage) 
                return true 
            
            return false
        }

        return true
    }

    const shouldShowNotificationItem = (item: SideBarMenuItemData) => {
        if (item.id === 'notifications') {
            if (starterConfig.showEmailPage) 
                return true 
            
            return false
        }

        return true
    }

    const onChangeSelectedItem = (id: string) => {
        setSelectedItemId(id as SideBarItemType)

        console.log('id', id)

        if (id === 'graphs')
           return navigate(routes.graphs.url)
        else if (id === 'tables')
            return navigate(routes.tables.url)
        else if (id === 'forms')
            return navigate(routes.forms.url)
        else if (id === 'emails')
            return navigate(routes.emails.url)
        else if (id === 'notifications')
            return navigate(routes.notifications.url)

        return navigate(routes.home.url)
    }

    return (
        <SideBarContext.Provider value={{ 
            selectedItemId, 
            items: items.filter(item => shouldShowEmailItem(item)).filter(item => shouldShowNotificationItem(item)), 
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