import {Fetcher} from 'ra-fetch'
import {useEffect, useState} from 'react'
import {useAuth} from '@/hooks/auth'
import DragAndDrop from '@/components/Forms/DragDrop'

function FileDrop({documents, id}){

    const {user} = useAuth({middleware: 'auth'})
    const [rounds, setRounds] = useState([])

    useEffect(() => {
            if (user?.id)
                Fetcher.api('backend')
                    .show('rounds', {
                        crisis_id: id,
                    }).then(response => setRounds(response))
        }, [user?.id],
    )

    return <div>
        <DragAndDrop data={documents.data}/>
    </div>
}

export default FileDrop
