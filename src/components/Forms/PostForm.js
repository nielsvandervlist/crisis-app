import {useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'

function PostForm() {

    const {user} = useAuth({middleware: 'auth'})

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()

    const postTypes = useApi('backend').index('post_types')

    function submit(e) {
        e.preventDefault()
        Fetcher.api('backend').store('posts', {
            title: title,
            description: description,
            post_type_id: type,
            user_id: user.id
        })
            .then(response => setResponse(response))
            .catch(errors => setErrors(errors))
    }

    return <form className={'card col-span-12 form'}>
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
                <label>Type of post</label>
                <select
                    value={type}
                    onChange={event => setType(event.target.value)}
                >
                    <option>Select a option</option>
                    {
                        postTypes[0].data.map((type, index) => {
                            return <option key={index} value={type.id}>{type.name}</option>
                        })
                    }
                </select>
            </div>
        </fieldset>
        <div className={'flex items-center'}>
            {response && <div className={'btn btn--success'}>Post created</div>}
            {errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={(e) => submit(e)}>Submit</button>
        </div>
    </form>
}

export default PostForm
