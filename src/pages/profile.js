import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from '@/hooks/auth'

function Profile(){

    const {user} = useAuth({middleware: 'auth'})

    return (
        <AppLayout
            header={
                <h1>Dashboard overview</h1>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            {user?.id}

        </AppLayout>
    )
}

export default Profile
