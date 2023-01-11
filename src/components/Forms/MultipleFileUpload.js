import {useEffect, useState} from 'react'

function FileUpload({file, setFile, label, type}) {

    const [preview, setPreview] = useState()
    const [filePreview, setFilePreview] = useState([])

    function isFileImage(file) {
        return file && file['type'].split('/')[0] === 'image'
    }

    function removeDuplicates(file, event) {
        return [...new Set(file), event.target.files[0]]
    }

    useEffect(() => {
        let files = []
        if(file) {
            Array.from(file).forEach(item => {
                files.push(item.name)
                if (item && typeof item !== 'string' && isFileImage(item)) {
                    setPreview(URL.createObjectURL(item))
                }
                if (item && typeof item !== 'string' && !isFileImage(item)) {
                    setFilePreview(files)
                } else {
                    setFilePreview([file])
                }
            })
        }
    }, [file])

    return <div className={`file-upload ${preview ? 'file-upload--preview' : ''}`}>
        <div className={'file-upload__input'}>
            <label className={'btn btn--soft'} htmlFor={'file'}>{!preview ? label : 'Change file'}</label>
            <input
                id={'file'}
                multiple
                name={'file'}
                type={'file'}
                onChange={event => setFile((file) => removeDuplicates(file, event))}
            />
        </div>
        {
            preview &&
            <div className={'file-upload__preview'}>
                <img src={preview}/>
            </div>
        }
        {
            filePreview &&
            <div className={'file-upload__file-preview'}>
                <ul>
                    {
                        filePreview.map((file, index) => {
                            return <li key={index}>{file}</li>
                        })
                    }
                </ul>
            </div>
        }
    </div>
}

export default FileUpload
