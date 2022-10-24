import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {Fetcher} from 'ra-fetch'

function ParticipantForm({requestType, id, participant}){
    const {user} = useAuth({middleware: 'auth'})

    const [name, setName] = useState(participant ? participant.data.name : '')
    const [email, setEmail] = useState(participant ? participant.data.email : '')
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    if (!user) {
        return <></>
    }

    const params = {
        name: name,
        email: email,
        user_id: user.id,
        participant_role_id: 2,
        company_id: 2,
    }

    if (id) {
        params.id = id
    }

    function submit(e) {
        e.preventDefault()

        if (requestType === 'store') {
            Fetcher.api('backend').store('participants', params)
                .then(response => setResponse(response))
                .catch(errors => setErrors(errors))
        }

        if (requestType === 'update') {
            Fetcher.api('backend').update('participants', params)
                .then(response => setResponse(response))
                .catch(errors => setErrors(errors))
        }
    }

    return <form className={'card col-span-12 form'}>
        <fieldset>
            <div className={'form__block'}>
                <label>Name</label>
                <input
                    type={'text'}
                    value={name}
                    placeholder={'Name'}
                    onChange={event => setName(event.target.value)}
                    id={'name'}
                    name={'name'}
                />
            </div>
            <div className={'form__block'}>
                <label>Email</label>
                <input
                    type={'text'}
                    value={email}
                    placeholder={'Email'}
                    onChange={event => setEmail(event.target.value)}
                    id={'email'}
                    name={'email'}
                />
            </div>
        </fieldset>
        <div className={'flex items-center'}>
            {response && <div className={'btn btn--success'}>Post created</div>}
            {errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={(e) => submit(e)}>Submit</button>
        </div>
    </form>
}

export default ParticipantForm
