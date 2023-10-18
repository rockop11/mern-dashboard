"use client"
import { useState } from "react"
import { Navbar, Sidebar } from "../../components"

const DashboardLayout = ({ children }) => {

    const [toggleSidebar, setToggleSidebar] = useState(false)

    const toggleSidebarHandler = () => {
        setToggleSidebar(!toggleSidebar)
    }

    return (
        <>
            <Navbar />
            <div className="flex w-[100%]">
                <Sidebar handler={toggleSidebarHandler} toggleSidebar={toggleSidebar}/>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout