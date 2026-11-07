import { useState } from "react";
export default function State(){
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const handel = (e)=>{
        const inputVale = e.target.value
        const warning = inputVale.includes(".js")? 'You need javascript skill complete this task' : null

        setTodo(inputVale);
        setWarning(warning);
    }
    return (
        <>
        <p>{todo}</p>
        <textarea name="text" id="text" 
        value={todo} 
        onChange={handel}
        />
        <h2>{warning || "Good Work"}</h2>
        </>
    )
}