import axios from 'axios'
const url = 'http://jsonplaceholder.typicode.com/todos';
export const getData = async () =>{
    return await axios.get(url);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}