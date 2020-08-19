import React, { useState, useMemo } from 'react';

import './Todos.css';

const Todos = ({ todos: originalTodos })=>{

    const filters = [ 'all', 'active', 'done' ]

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(originalTodos || []);
    const [activeFilter, setActiveFilter] = useState(filters[0]);

    const addTodo = e =>{
        if(e.key ==="Enter" && input.length > 0){
            setTodos(todos => [
                ...todos, {name: input, done: false}
            ])
            setInput('')
        }
    }

    const filteredTodos = useMemo(
        () =>
              todos.filter((todo, i)=>{
                if (activeFilter === 'all'){
                    return todo;
                }
    
                if(activeFilter === 'active'){
                    return !todo.done;
                }
                if(activeFilter === 'done'){
                    return todo.done;
                }
            }), 
            [todos, activeFilter]
            )

    const toggle = (index) =>{
        setTodos( todos =>
             todos.map((todo, i)=> 
             index === i ? {...todo, done: !todo.done}
              : todo)
        )
    }    

    const remove = index =>{
        setTodos(todos => todos.filter((todo, i) => i !== index))
    }

    return(
        <div>
            <h2 className="title">Todos</h2>
            <input 
                className="input"
                onChange={e =>setInput(e.target.value)}
                onKeyDown={addTodo}
                value={input}
                placeholder="Add something..."
            />
            <ul className="list-todo">
                { filteredTodos.length > 0 ? (
                    filteredTodos.map(({name, done}, i)=>(
                        <li 
                        key={`todo-${i}`}
                        className="todo-item"
                        data-testid={`todo-${i}`}>
                            <input 
                              data-testid="checkbox"
                              type="checkbox"
                              checked={done}
                              onChange={()=>toggle(i)}
                            />  
                            <div className="todo-infos">
                                <span className={`todo-name ${done
                                ? "todo-name-done": ""}`}>
                                    { name }
                                </span>
                                <button className="todo-delete"
                                onClick={ ()=>remove(i) }>
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))
                ): (
                    <p className="no-results">No to-dos!</p>
                ) }
            </ul>

            <ul className="list-filters">
                {
                    filters.map(filter=>(
                        <li
                         key={filter}
                         className={`filter ${
                             activeFilter === filter ? 
                             "filter-active": ""
                         }`}
                         onClick={()=>setActiveFilter(filter)}>
                            { filter }
                        </li>
                    ))
                }
            </ul> 
        </div>
    )
}

export default Todos;