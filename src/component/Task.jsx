import { useEffect, useState } from "react";
import {nanoid} from "nanoid";

const Task = () => {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
            })
    }, []);

 
    const deleteTodo = (index) => {
        const newTodo = todos.filter(todo => todo.id !== index);
        
        setTodos(newTodo);
        console.log(`newLength : ${todos.length}`);
    }
   const [title, setTitle] = useState(' ');
   const [complete, setComplete] = useState('')
    // const [addFormData, setAddFormData] = useState({
    //     title: ' ',
    //     completed : ' '

    // })
    const addData = {title : title, completed : complete};
    console.log(addData);
    const newHandleform = (event) =>{
        event.preventDefault();
        setComplete(event.target.value);
        console.log(complete);
    }
    const handleAddFormChange = (event) => {
        event.preventDefault();
        setTitle(event.target.value);
        console.log(title);
    };
    const handleAddFormSubmit = (event) => {
        // event.preventDefault();
        // const newContact = {
            
        //     title : addFormData.title,
        //     completed : addFormData.completed
        // };
        // const newContacts = [...todos, newContact];
        const data = [...todos].push(addData);
        
        setTodos(data);
        console.log(data);
        
    }

    return (
        <div className='container'>
            <table className='table'>
                
                    {todos.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.completed.toString()}</td>
                            {/* <td>{todos[value].title}</td>
                            <td>{`${todos[value].completed}`}</td> */}
                            <td>
                                <button className='btn btn-danger ' onClick={() => deleteTodo(value.id)}> Delete </button>
                            </td>

                        </tr>
                    ))}
                
            </table>
            <form>
                
                <input type="text" name="title " require=" " onChange={newHandleform} />
                <input type="text" name="complete " require=" " onChange={handleAddFormChange} />
            </form>
            <button className='btn btn-primary mt-3' onClick={handleAddFormSubmit} >Add Task</button>
        </div>
    );
}
export default Task;