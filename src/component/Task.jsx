import { useEffect, useState } from "react";

const Task = () => {
    const [todos, setTodos] = useState([])
    

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
            })
    }, [])
    const arr = todos;
    const [newdata, setNewdata] = useState(arr);
   
    console.log(arr.length)
    console.log(`data : ${arr}`)

     
    const deleteTodo = (index)  => {
        const array = arr
       const del = arr.splice(index, 1)
      console.log(index);
      console.log(`newData : ${arr}`);
        
    }
    useEffect(()=>{
        setNewdata(arr)
    } ,[])
  
    return (
        <div className='container'>
            <table className='table'>
                <tbody>
                    {arr.map((key , value) => (
                        <tr >
                            <td>{arr[value].id}</td>
                            <td>{arr[value].title}</td>
                            <td>{`${arr[value].completed}`}</td>
                            <button class='btn btn-danger ' onClick={() => deleteTodo(arr[value].id)}> Delete </button>

                        </tr>
                    ))}
                </tbody>
            </table>
            <button class='btn btn-primary'>Add Task</button>
        </div>
    )
}
export default Task;