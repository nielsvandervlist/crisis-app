import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'
import GetParticipants from '@/components/Participants/GetParticipants'
import FileUpload from '@/components/Forms/FileUpload'
import MultipleFileUpload from '@/components/Forms/MultipleFileUpload'
import Timeline from '@/components/Timeline/Timeline'
import DragAndDrop from '@/components/Forms/DragDrop'
import FileDrop from '@/components/Rounds/FileDrop'

function ControlActiveCrisis({crisis, documents}) {

    const {user} = useAuth({middleware: 'auth'})
    const [document, setDocument] = useState()
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    function setRoundOfDocument(id, value){
        setDocument(value)

        Fetcher.api('backend').update('documents', {
            id: id,
            round_id: value,
        })
            .then(response => setResponse(response))
            .catch(errors => setErrors(errors))
    }

    return <div className={'card col-span-12'}>
        <div className={'active-crisis mb-8'}>
            <div className={'active-crisis__heading mb-4'}>
                <h1 className={'mb-2'}>{crisis.title}</h1>
                <p className={'font-bold'}>Description:</p>
                <p className={'mb-2'}>{crisis.description}</p>
                <p className={'font-bold'}>Company:</p>
                <p>{crisis.company.name}</p>
            </div>

            {documents && <div className={'documents'}>
                <div className={'documents__heading mb-4'}>
                    <h3>Documents</h3>
                    <p>Choose in which round the documents are shown to the participants, or at the start</p>
                </div>
                {
                    documents.data.map((doc, index) => {
                        return <div
                            className={'documents__item py-4 rounded-md border border-gray-100 px-4 flex items-center'}
                            key={index}
                        >
                            <p>{doc.name}</p>
                            {/*<select*/}
                            {/*    className={'max-w-[120px] ml-auto small'}*/}
                            {/*>*/}
                            {/*    <option>Participant 1</option>*/}
                            {/*</select>*/}
                            {/*<select*/}
                            {/*    value={document}*/}
                            {/*    className={'max-w-[100px] ml-auto small'}*/}
                            {/*    onChange={event => setRoundOfDocument(doc.id, event.target.value)}*/}
                            {/*>*/}
                            {/*    <option>Default</option>*/}
                            {/*    <option>Round 1</option>*/}
                            {/*</select>*/}
                        </div>
                    })
                }
            </div>}
        </div>

        {documents && <FileDrop documents={documents} />}
    </div>
}

export default ControlActiveCrisis
