import { useEffect, useState } from "react"

function Todos() {
    const [count, setCount] = useState([])

    useEffect(()=>{
        const Fetch = async ()=>{
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/todos")

                const dataRec = await resp.json();
                const getData = await dataRec
                setCount(getData)
            } catch (error) {
                console.error(error);
            }
        }
        Fetch();
    },[])

  return (
    <>
    <h1>Data Fetching from TODOS..</h1>
    {
        count.map((items, idx)=>(
            <p key={idx}> {items.title} </p>
        ))
    }
    </>
  )
}

export default Todos