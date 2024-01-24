'use client'
import Head from 'next/head'
import useAuth from '@/hooks/auth'
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
