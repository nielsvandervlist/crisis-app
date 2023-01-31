import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PostForm from '@/components/Forms/PostForm'
import Link from 'next/link'
import Twitter from '@/components/PostTypes/Twitter'

function Create() {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create post
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className={'col-span-6 card'}>
                <h3 className={'mb-4'}>Creating a new post</h3>
                <p className={'mb-4'}>Posts can be placed on a timeline or can be injected into a online crisis.
                    Make sure that you have a <Link href={'/create/crises'}><a
                        className={'underline'}>crisis</a></Link> and <Link href={'/create/timelines'}><a
                        className={'underline'}>timeline</a></Link> created before using the posts</p>
                <p>You can already make posts beforehand so you can use them later!</p>
            </div>

            <div className={'col-span-12 grid gap-4 grid-cols-12'}>
                <div className={'col-span-3 card card--social'}>
                    <FontAwesomeIcon icon="fa-brands fa-twitter"/>
                    <span>Twitter</span>
                </div>
                <div className={'col-span-3 card card--social'}>
                    <FontAwesomeIcon icon="fa-brands fa-facebook"/>
                    <span>Facebook</span>
                </div>
                <div className={'col-span-3 card card--social'}>
                    <FontAwesomeIcon icon="fa-brands fa-youtube"/>
                    <span>Youtube</span>
                </div>
                <div className={'col-span-3 card card--social'}>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin"/>
                    <span>Linkedin</span>
                </div>
            </div>

            <PostForm requestType={'store'}/>

        </AppLayout>
    )
}

export default Create
