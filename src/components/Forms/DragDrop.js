import React, {useState} from 'react'

function DragAndDrop({data}) {
    const [items, setItems] = useState(data)
    const [draggedItem, setDraggedItem] = useState(null)
    const [droppedItems, setDroppedItems] = useState([])

    const handleDragStart = (e, item) => {
        setDraggedItem(item)
        e.dataTransfer.setData('application/json', JSON.stringify(item))
    }

    const handleDragOver = e => {
        e.preventDefault()
    }

    const handleDrop = e => {
        setDraggedItem(null)
        const droppedItem = JSON.parse(e.dataTransfer.getData('application/json'))
        setDroppedItems([...droppedItems, droppedItem])
        setItems(items.filter(i => i.id !== droppedItem.id))
    }

    const handleDragBack = (e, item) => {
        setDraggedItem(item)
        e.dataTransfer.setData('application/json', JSON.stringify(item))
    }

    const handleDropBack = e => {
        setDraggedItem(null)
        const droppedItem = JSON.parse(e.dataTransfer.getData('application/json'))
        setItems([...items, droppedItem])
        setDroppedItems(droppedItems.filter(i => i.id !== droppedItem.id))
    }

    return (
        <div>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDropBack}
                className={'border rounded-md border-gray-100 px-4 py-4'}
            >
                {items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li
                                key={index}
                                draggable
                                onDragStart={e => handleDragBack(e, item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No more items to drag</p>
                )}
            </div>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={'border rounded-md border-gray-100 px-4 py-4'}
            >
                {droppedItems.length > 0 ? (
                    <ul>
                        {droppedItems.map((item, index) => (
                            <li
                                key={index}
                                draggable
                                onDragStart={e => handleDragStart(e, item)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Drop Here</p>
                )}
            </div>
        </div>
    )
}

export default DragAndDrop
