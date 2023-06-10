import React ,{useState} from 'react';

export default function Todoform(props) {
 
const [input, setInput] = useState(''); 

const handleChange = e => {
    setInput(e.target.value)
}

const handleSubmit=(e) => {
e.preventDefault();
props.addTask({
    id:Math.floor(Math.random() * 1000000),
    text:input,
    isComplete: false
})
setInput('')
}


return( 
<form className='todo-form'>
    <input type='text'  placeholder='Task for Today' onChange={handleChange} className='todo-input' value={input}  name="text"></input>

<button type='submit' onClick={handleSubmit} className='submit-btn'>Add To-Do</button>
</form>
);
}
