import './Todo.css';
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorage, setLocalStorage } from './TodoLocalStorage';

export const Todo = () => {
   
    const [task, setTask] = useState(() => getLocalStorage());   

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
        if(!content) return;
        //if(task.includes(inputValue))return;
        if(task.find((curTask) => curTask.content === content)) return;
        setTask((prevTask) => [...prevTask, {id, content, checked}]);
    };  

    //add data to localStorage
    setLocalStorage(task);

    const handleDelete = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);

    };
    const handleClearAll = () => {
        setTask([]);
    };
    const handleChecked = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === content) {
                return {...curTask, checked: !curTask.checked};
            }
            return curTask;
        });
        setTask(updatedTask);

    };

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List - Alien</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                    <TodoList 
                                    key={curTask.id} 
                                    data={curTask.content} 
                                    checked={curTask.checked}
                                    onDelete={handleDelete}
                                    onChecked={handleChecked}
                                    />
                                );
                            }
                        )
                    }

                </ul>
            </section>
            <section>
                <button className='clear-btn' onClick={handleClearAll}>Clear All</button>
            </section>
        </section>
    )
};
