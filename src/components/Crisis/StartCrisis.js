import Link from 'next/link'
import {useState} from 'react'
import {useApi} from 'ra-fetch'
import {Fetcher} from 'a-fetch'

function StartCrisis({crises}){

    const [activeCrisis, setActiveCrisis] = useState()

    function submit() {
        Fetcher.api('backend').update('crises', {
            'id': activeCrisis,
            'status': 1,
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return <div className={'card col-span-4 mb-2 flex flex-col'}>
        {
            crises.data.length > 0 &&
            <div className={'form__block'}>
                <h3 className={'mb-4'}>Select a crisis to start and run the timeline</h3>
                <select
                    value={activeCrisis}
                    onChange={event => setActiveCrisis(event.target.value)}
                >
                    <option>Select a crisis</option>
                    {
                        crises.data.map((crisis, index) => {
                            return <option key={index} value={crisis.id}>{crisis.title}</option>
                        })
                    }
                </select>
            </div>
        }
        <button onClick={submit} className={'mt-auto btn btn--success'}>Start crisis</button>
    </div>
}

export default StartCrisis
