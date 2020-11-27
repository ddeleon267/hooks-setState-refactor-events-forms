import React, { useState } from 'react' // importing the hook

function Form(props) {
    const [title, setTitle] = useState("") // setting initial variable, method to change variable value, and using useState to set starting value in state

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleOnSubmit({ title: title })
        setTitle("") // updating value of title in state
    }

    const handleChange = (e) => {
        setTitle(e.target.value) // updating value of title in state
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>New Todo:     </label>
                <input type="text" value={title} onChange={handleChange}></input>
                <input type="submit" value="Add Todo"></input>
            </form>
        </div>
    )

}

export default Form
