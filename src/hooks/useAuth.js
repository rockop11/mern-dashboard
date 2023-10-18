"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

export function useAuth() {
    const router = useRouter()

    const [storagedUser, setStoragedUser] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser)
                setStoragedUser(parsedUser)
            } catch (err) {
                router.push('/login')
                console.log("error al analizar el objeto");
            }
        } else {
            router.push('/login')
        }
    }, [])


    return storagedUser
}