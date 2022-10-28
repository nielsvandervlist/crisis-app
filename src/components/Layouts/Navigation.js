import Pusher from 'pusher-js'
import Dropdown from '@/components/Dropdown'
import ResponsiveNavLink, { ResponsiveNavButton } from '@/components/ResponsiveNavLink'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import Echo from 'laravel-echo'
import axios from '@/lib/axios'
import Login from '@/components/Layouts/Navigation/Login'
import Hamburger from '@/components/Layouts/Navigation/Hamburger'
import Menu from '@/components/Layouts/Navigation/Menu'

const Navigation = ({header, user}) => {
    const router = useRouter()
    const { logout } = useAuth()

    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white border-b border-gray-100 m-6 mb-0 card">
            <div className="max-w-7xl mx-auto">
                <div className="flex">
                    {header}
                    <Login user={user} logout={logout}/>
                    <Hamburger setOpen={setOpen} open={open}/>
                </div>
            </div>
            {open && (
                <Menu user={user} router={router} logout={logout}/>
            )}
        </nav>
    )
}

export default Navigation
