import { useState } from "react";

function Input() {
    const [state , setState] = useState({value : ''})

    function handleChange(event) {
        setState({value : event.target.value});
    }

    function handleSubmit(event) {
        alert('A name was submitted: ' + state.value);
        event.preventDefault();
    }

    return ( 
        <>
        <form onSubmit={handleSubmit}>
        <label>
            Name:
        <input type="text" name="name" value={state.value} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
        </>
     );
}

export default Input;