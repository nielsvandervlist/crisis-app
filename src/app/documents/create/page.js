import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import MultipleFileUpload from '@/components/Forms/MultipleFileUpload'
import {Fetcher} from 'ra-fetch'
import {useState} from 'react'
import useAuth from '@/hooks/auth'

const Create = () => {

    const [file, setFile] = useState()

    const {user} = useAuth({middleware: 'auth'})

    function sendFiles(files) {
        files.forEach(file => {
            Fetcher.api('backend').store('documents', {
                'name': file.name,
                'user_id': user.id,
                'url': file,
                'inserted': 0,
            })
        })
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

            <div className={'col-span-12 card'}>
                <h1 className={'mb-4'}>Submit your documents</h1>
                <MultipleFileUpload
                    filesOnly={true}
                    file={file}
                    setFile={setFile}
                    label={'Add documents'}
                />

                <button onClick={() => sendFiles(file)} className={'btn btn--primary'}>Submit documents</button>
            </div>

        </AppLayout>
    )
}

export default Create
