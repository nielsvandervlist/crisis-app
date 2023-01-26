import Link from 'next/link'

function CreateCrisis(){
    return <div className={'col-span-4 card flex flex-col'}>
        <h3 className={'mb-4'}>Create a new crisis.</h3>
        <p className={'mb-4'}>Click on the link to create a new crisis, the crisis can be used to create timelines and add participants</p>
        <Link href={`crises/create`}>
            <a className={'btn btn--primary inline-block mt-auto'}>Create crisis</a>
        </Link>
    </div>
}

export default CreateCrisis
