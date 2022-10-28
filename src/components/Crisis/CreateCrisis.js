import Link from 'next/link'

function CreateCrisis(){
    return <div className={'col-span-4 mb-2 card flex flex-col'}>
        <h3 className={'mb-4'}>Create a new crisis.</h3>
        <p>Click on the link to create a new crisis, the crisis can be used to create timelines and add participants</p>
        <button className={'btn btn--primary inline-block mt-auto'}><Link href={`crisis/create`}><a>Create
            crisis</a></Link></button>
    </div>
}

export default CreateCrisis
