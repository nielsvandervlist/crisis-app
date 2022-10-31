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

    function removeItem(id) {
        const filtered = items.data.filter(item => {
            return item.id !== id
        })

        setItems({loading: false, data: filtered})
    }

    if (!items.data.length || items.loading) {
        return <></>
    }

    const firstItem = Object.values(items.data)[0]
    let headings = Object.keys(firstItem)

    return <div className={'table-overview col-span-12 p-8 bg-white'}>
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
                        <td className={'p-4 cursor-pointer flex'}>
                            <div className={'flex ml-auto'}>
                                <Link href={`/${type}/${item.id}`}>
                                    <a
                                        className={'btn btn--primary btn--label btn--icon mr-4'}>
                                        <FontAwesomeIcon icon="pen-to-square"/>
                                    </a>
                                </Link>
                                <div
                                    onClick={() => submitDelete(item.id)}
                                    className={'btn btn--primary btn--label btn--icon'}
                                >
                                    <FontAwesomeIcon icon="trash-can"/>
                                </div>
                            </div>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </div>
}
