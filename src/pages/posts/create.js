import Head from 'next/head'
import List from '@/components/Lists/List'
import AppLayout from '@/components/Layouts/AppLayout'
import PostForm from '@/components/Forms/PostForm'

function Create(){
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

            <div className={'card col-span-12'}>
                <h1>Create Post</h1>
            </div>

            <PostForm requestType={'post'}/>

        </AppLayout>
    )
}

export default Create
