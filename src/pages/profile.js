import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from '@/hooks/auth'
import Link from 'next/link'

function Profile() {

    const {user} = useAuth({middleware: 'auth'})

    return (
        <AppLayout
            header={
                <h1>Profile</h1>
            }>
            <Head>
                <title>Profile</title>
            </Head>

            <div className={'grid card gap-4 grid-cols-12 col-span-12'}>
                <div className={'col-span-4 pr-4 border-r border-gray-100'}>
                    <img src={'/'}/>
                </div>
                <div className={'col-span-8'}>
                    <h2>{user?.name}</h2>
                    <h3>{user?.email}</h3>
                    <Link href={`/password-reset/${user?.id}`}>
                        <a className={'btn btn--primary inline-block mt-8'}>Reset password</a>
                    </Link>
                </div>
            </div>

        </AppLayout>
    )
}

export default Profile
