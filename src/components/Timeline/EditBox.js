import {useState} from 'react'
import Modal from '@/components/Modal/Modal'
import {useApi, useShow} from 'ra-fetch'

function EditBox({index, post, id}) {

    const [edit, setEdit] = useState(false)

    return <>
        <div
            key={index}
            style={{left: post.pixels}}
            className={'timeline-posts-post timeline-posts-post__edit cursor-pointer'}
            onClick={() => setEdit(!edit)}
        />
        <Modal>

        </Modal>
    </>
}

export default EditBox
