import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import List from '@/components/Lists/List'
import Link from 'next/link'
import CreateCrisis from '@/components/Crisis/CreateCrisis'
import OnlineCrisis from '@/components/Crisis/OnlineCrisis'
import StartCrisis from '@/components/Crisis/StartCrisis'

const Crises = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [crises, setCrises] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('crises', {
                    user_id: user?.id,
                })
                .then((res) => setCrises(res))
        }
    }, [user?.id])

    if (!crises) {
        return <></>
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <StartCrisis crises={crises}/>
            <CreateCrisis/>
            <OnlineCrisis crises={crises}/>

            {crises && <List items={crises} setItems={setCrises} type={'crises'}/>}

        </AppLayout>
    )
}

export default Crises
