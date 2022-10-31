import {useEffect, useState} from 'react'
import {Fetcher, useApi, useIndex} from 'ra-fetch'
import {useAuth} from '@/hooks/auth'

function PostForm({requestType, id, post}) {

    const {user} = useAuth({middleware: 'auth'})

    const [title, setTitle] = useState(post ? post.data.title : '')
    const [description, setDescription] = useState(post ? post.data.description : '')
    const [type, setType] = useState(post ? post.data.post_type_id : '')
    // const [image, setImage] = useState(post ? post.data.image : '')
    const [response, setResponse] = useState()
    const [errors, setErrors] = useState()
    const [postTypes, setPostTypes] = useState({data: []})

    useEffect(() => {
        Fetcher.api('backend').index('post_types')
            .then((res) => {
                setPostTypes(res)
            })
    }, [])

    if (!user) {
        return <></>
    }

    const params = {
        title: title,
        description: description,
        post_type_id: type,
        user_id: user.id,
    }

    if (id) {
        params.id = id
    }

    function submit(e) {
        e.preventDefault()
        if (requestType === 'store') {
            Fetcher.api('backend').store('posts', params)
                .then(response => setResponse(response))
                .catch(errors => setErrors(errors))
        }

        if (requestType === 'update') {
            Fetcher.api('backend').update('posts', params)
                .then(response => setResponse(response))
                .catch(errors => setErrors(errors))
        }
    }

    return <form className={'card col-span-6 form'}>
        <fieldset>
            {
                postTypes.data.length > 0 &&
                <div className={'form__block'}>
                    <label>Type of post</label>
                    <select
                        value={type}
                        onChange={event => setType(event.target.value)}
                    >
                        <option>Select a option</option>
                        {
                            postTypes.data.map((type, index) => {
                                return <option key={index} value={type.id}>{type.name}</option>
                            })
                        }
                    </select>
                </div>
            }
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
        </fieldset>
        <div className={'flex items-center'}>
            {response && <div className={'btn btn--success'}>Post created</div>}
            {errors && <div className={'btn btn--error'}>{errors.errors[0]}</div>}
            <button className={'btn btn--primary ml-auto mt-4'} onClick={(e) => submit(e)}>Submit</button>
        </div>
    </form>
}

export default PostForm
