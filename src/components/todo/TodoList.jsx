import React, { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../navbar/Navbar'
// empty todo img
import emptyImg from "../../images/todo/empty.png"
import ToTop from '../../utils/ToTop';

export default function TodoList() {
    const [todos, setTodos] = useState([

    ]);
    const [input, setInput] = useState("");

    // adding todo
    const addingTodo = useCallback((e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.random(),
            name: input
        };

        setTodos([newTodo, ...todos]);
        setInput("");

        // save to local storage
        localStorage.setItem("todo", JSON.stringify([newTodo, ...todos]));
    }, [todos, input]);

    // deleting todo
    const deletingTodo = useCallback((id) => {
        const deletingTodo = todos.filter((todo) => {
            return todo.id !== id
        });

        setTodos(deletingTodo);

        // save to local storage
        localStorage.setItem("todo", JSON.stringify(deletingTodo));

    }, [todos]);

    // load saved todos
    useEffect(() => {
        const localS = localStorage.getItem("todo");

        if (localS) {
            setTodos(JSON.parse(localS));
        }
    }, []);

        // scroll top func
        useEffect(() => {
            ToTop();
        }, []);

    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className='todo container'>
                {/* SEO */}
                <Helmet>
                    <title>QAYDNOMALAR</title>
                    <meta name="description" content="KUNLIK QAYDNOMALAR" />
                    <meta name="keywords" content="todo,todoList, todo list, qaydnomalar" />
                </Helmet>

                <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="title">Qaydnomalar</h1>

                <form onSubmit={addingTodo}>
                    <input data-aos="zoom-in-down" required value={input} onChange={(e) => setInput(e.target.value)} name='name' type="text" placeholder='Qaydnoma nomi...' />
                    <button type='submit'><i class="fa-solid fa-plus"></i></button>
                </form>

                <ul className='todo__lists'>
                    {
                        todos.length ? todos.map((e) => (
                            <li key={e.id}><span>{e.name}</span>
                                <i onClick={() => deletingTodo(e.id)} class="fa-solid fa-trash text-danger"></i></li>
                        )) : (
                            <>
                                <img src={emptyImg} alt="empty gif" />
                                <p>SIZDA HOZIRCHA QAYDNOMALAR YO'Q.</p>
                            </>
                        )
                    }
                </ul>

            </div>
        </>
    )
}
