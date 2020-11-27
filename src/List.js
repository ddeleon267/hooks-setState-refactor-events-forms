import React, { useState } from 'react' // importing the hook
import { Item } from './Item'
import Form from './Form'

function List() {

    const [list, setList] = useState([]) // setting initial variable, method to change variable value, and using useState to set starting value in state

    const addNewTodo = (data) => {
        const newTodo = {
            title: data.title,
            id: list.length + 1
        }

        setList([...list, newTodo]) // updating value of list in state
    }

    const handleDelete = (id) => {
        const newList = list.filter(item => item.id !== id)
        setList(newList)  // updating value of list in state

        // comparison of "old-school" way of updating state
        // this.setState((previousState) => {
        //     const newState = previousState.list.filter(item => item.id !== id)
        //     return {
        //         list: newState
        //     }
        // })
    }


    const itemList = list.map(item => {
        return <Item key={item.id} item={item} handleOnDelete={handleDelete} />
    })
    return (
        <div>
            <Form handleOnSubmit={addNewTodo} />
            {itemList}
        </div>
    )

}

export default List
