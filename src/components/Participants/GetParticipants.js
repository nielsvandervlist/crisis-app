import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import {Fetcher} from 'ra-fetch'

function GetParticipants({company_id}) {

    const {user} = useAuth({middleware: 'auth'})
    const [participants, setParticipants] = useState()

    useEffect(() => {
        if (user?.id) {
            Fetcher.api('backend').index('participants', {
                user_id: user?.id,
                company_id: company_id,
            }).then(res => setParticipants(res))
        }
    }, [user?.id])

    if(!participants || !participants.data.length || participants.loading){
        return <></>
    }

    return <div className={'participants flex'}>
        {
            participants.data.map((partipant, index) => {
                return <div key={index} className={'participants__block rounded-full h-10 w-10 relative overflow-hidden'}>
                    <img src={'/images/Portrait_Placeholder.png'} alt={''} title={partipant.name}/>
                </div>
            })
        }
    </div>
}

export default GetParticipants
