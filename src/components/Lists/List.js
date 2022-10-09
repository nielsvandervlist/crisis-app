import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Fetcher} from 'ra-fetch'
import {useEffect} from 'react'

export default function List({items, setItems, type}) {

    function submitDelete(id) {
        Fetcher.api('backend').delete(type, {id: id})
            .then(response => removeItem(id))
            .catch(errors => console.log(errors))
    }

    function removeItem(id)
    {
        const filtered = items.data.filter(item => {
            return item.id !== id;
        })

        setItems({loading: false, data: filtered})
    }

    if (!items.data.length || items.loading) {
        return <></>
    }

    const firstItem = Object.values(items.data)[0]
    let headings = Object.keys(firstItem)

    return <div className={'table-overview col-span-12 p-8 bg-white'}>
        <div className={'table-overview__heading flex align-center mb-2'}>
            <h2>{type}</h2>
            <button className={'ml-auto btn btn--primary'}><Link href={`${type}/create`}><a>Create {type}</a></Link></button>
        </div>
        <table className={'w-full'}>
            <thead>
            <tr>
                {
                    headings.map((heading, index) => {
                        return <th className={'text-left p-4'} key={index}>{heading}</th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                items.data.map((item, index) => {
                    let values = Object.values(item)
                    return <tr key={index}>
                        {
                            values.map((value, index) => {
                                return <td className={'p-4'} key={index}>{value}</td>
                            })
                        }
                        <td className={'p-4'}><Link href={`/posts/${item.id}`}><a><FontAwesomeIcon
                            icon="pen-to-square"/></a></Link></td>
                        <td className={'p-4 cursor-pointer'} onClick={() => submitDelete(item.id)}>
                            <FontAwesomeIcon icon="trash-can"/>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}
