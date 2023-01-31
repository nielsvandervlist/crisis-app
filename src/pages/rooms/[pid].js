import { useRouter } from 'next/router'
import {useAuth} from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import RoomWrapper from '@/components/Chat/RoomWrapper'
import {useEffect} from 'react'

const Room = () => {

    const router = useRouter()
    const { pid } = router.query

    const { user } = useAuth({ middleware: 'auth' })

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Room</title>
            </Head>

            <div className={'card col-span-12'}>
                Room
            </div>

            {user && <RoomWrapper user={user} chatRoomId={pid}/>}

        </AppLayout>
    )
}

export default Room
