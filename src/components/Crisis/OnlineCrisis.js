import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'

function OnlineCrisis({crises}) {

    const [activeCrises, setActiveCrises] = useState()

    useEffect(() => {
        const filter = crises.data.filter(crises => crises.status === 1)
        setActiveCrises(filter)
    }, [])

    return <div className={'col-span-4 mb-2 card flex flex-col'}>
        <h3 className={'mb-4'}>Online crises</h3>
        <p className={'mb-4'}>Here is a list of all the active crises</p>
        {
            activeCrises &&
            activeCrises.map((crisis, index) => {
                return <div className={'border-t border-b border-gray-100 py-2'} key={index}>
                    <b className={'flex items-center'}>
                        <span className={'h-4 w-4 bg-success rounded-full inline-block mr-2'}/>
                        {crisis.title}
                        <span className={'ml-auto btn btn--primary btn--label'}>Stop crisis</span>
                    </b>
                </div>
            })
        }
    </div>
}

export default OnlineCrisis
