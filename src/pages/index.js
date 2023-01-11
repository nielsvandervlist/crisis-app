import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import LandingPage from '@/components/Landingpage/Landingpage'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <LandingPage/>
        </>
    )
}
