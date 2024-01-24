import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useAuth from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import List from '@/components/Lists/List'
import Link from 'next/link'

const Companies = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [companies, setCompanies] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend')
                .index('companies', {
                    user_id: user?.id,
                })
                .then(response => setCompanies(response))
        }
    }, [user?.id])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Companies
                </h2>
            }>
            <Head>
                <title>Companies</title>
            </Head>

            <div className={'flex w-full col-span-12 mb-2'}>
                <button className={'btn btn--primary'}><Link href={`companies/create`}>Create company</Link></button>
            </div>

            {companies && <List items={companies} setItems={setCompanies} type={'companies'}/>}
        </AppLayout>
    )
}

export default Companies
