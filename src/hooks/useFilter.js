import {useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Filter = ({value, setValue, className}) => <div className={'filter'}>
    <input
        type={'text'}
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder={'Search in the list'}
    />
    <span className={'btn btn--round'}><FontAwesomeIcon icon="search"/></span>
</div>

export function useFilter(items){

    const [value, setValue] = useState('')
    const [sortedItems, setSortedItems] = useState()

    useEffect(() => {
        setSortedItems(items.filter(item => item.name === value || item.title === value))
    }, [value])

    return [
        <Filter value={value} setValue={setValue}/>,
        sortedItems
    ]
}
