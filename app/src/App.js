import React, { useEffect,useState } from 'react';
import axios from 'axios';

function App() {

  const [content,setContent] = useState([]);
  const [todo,setTodo] = useState([]);

  useEffect(() => {
     getData();
  },[todo]);

  const getData = async () => {
    try {
      const content = axios.get("http://localhost:8080/todos/all");
      const result = (await content).data;
      setTodo(result);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTodo = async(id) => {
    try{
    const result = await axios.delete(`http://localhost:8080/todos/remove/${id}`);
    const newTodos = todo.filter(item => item.id !== id);
    setTodo(newTodos);
    }catch(error){
      console.log(error);
    }
  }


  return (
    <div className='card'>
      <h2>Todo List</h2>
      <form onSubmit={e => {
        e.preventDefault();
        if(content === "") return;
        try{
        const url = axios.post("http://localhost:8080/todos",{todo:content});
        setContent("");
        }catch(error){
          console.log(error);
        }
      }
      }>
        <input type="text" placeholder='Enter todo...' onChange={e => setContent(e.target.value)} value={content}/>
        <button type='submit'>Add</button>
      </form>
      <ul>
      {
        todo.map(item => {
          return(
            <li key={item._id}>
              {item.todo}
               <div className="icons">
                <i className='fas fa-trash-alt' onClick={e => {
                  deleteTodo(item._id);
                }}></i>
               </div>
             </li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default App;