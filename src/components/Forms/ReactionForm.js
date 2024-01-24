import {useEffect, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import useAuth from '@/hooks/auth'

function ReactionForm({requestType, id, reaction}) {

    const {user} = useAuth({middleware: 'auth'})

    const [title, setTitle] = useState(reaction ? reaction.data.title : '')
    const [description, setDescription] = useState(reaction ? reaction.data.description : '')
    const [src, setSrc] = useState(reaction ? reaction.data.src : '')
    const [participant, setParticipant] = useState(reaction ? reaction.data.user_id : '')
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    if (!user) {
        return <></>
    }

    const params = {
        title: title,
        user_id: user?.id,
        src: src,
        description: description,
    }

    if (id) {
        params.id = id
    }

    function submit(e) {
        e.preventDefault()
        if (requestType === 'store') {
            Fetcher.api('backend').store('reactions', params)
                .then(response => setResponse(response))
                .catch(errors => setErrors(errors))
        }

        if (requestType === 'update') {
            Fetcher.api('backend').update('reactions', params)
                .then(response => setResponse(response))
                .catch(errors => setErrors(errors))
        }
    }

    return <form className={'form'}>
        <fieldset>
            <div className={'form__block'}>
                <label>Title</label>
                <input
                    type={'text'}
                    value={title}
                    placeholder={'Title'}
                    onChange={event => setTitle(event.target.value)}
                    id={'title'}
                    name={'title'}
                />
            </div>
            <div className={'form__block'}>
                <label>Description</label>
                <input
                    type={'text'}
                    value={description}
                    placeholder={'Description'}
                    onChange={event => setDescription(event.target.value)}
                    id={'description'}
                    name={'description'}
                />
            </div>
            <div className={'form__block'}>
                <label>Src</label>
                <input
                    type={'text'}
                    value={src}
                    placeholder={'Src'}
                    onChange={event => setSrc(event.target.value)}
                    id={'src'}
                    name={'src'}
                />
            </div>
        </fieldset>
        <div className={'flex items-center'}>
            {response && <div className={'btn btn--success'}>Reaction created</div>}
            {errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={(e) => submit(e)}>Submit</button>
        </div>
    </form>
}

export default ReactionForm
