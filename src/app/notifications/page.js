import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useAuth from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'
import Link from 'next/link'
import List from '@/components/Lists/List'
import {useEffect, useState} from 'react'
import NotificationsList from '@/components/Lists/NotificationsList'

const Notifications = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [notifications, setNotifications] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('notifications', {
                    user_id: user?.id,
                })
                .then(response => setNotifications(response))
        }
    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">

                </h2>
            }>
            <Head>
                <title>Notifications</title>
            </Head>

            {notifications && <NotificationsList notifications={notifications} user={user}/>}
        </AppLayout>
    )
}

export default Notifications
