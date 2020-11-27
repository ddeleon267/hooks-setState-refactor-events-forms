import React from 'react'
import { TomatoButton } from './Styles.js'

export const Item = ({ item, handleOnDelete }) => {
    const onDelete = () => {
        handleOnDelete(item.id)
    }

    return (
        <div>
            {item.title}
            <TomatoButton id={item.id} onClick={onDelete}>X</TomatoButton>
        </div>
    )
}