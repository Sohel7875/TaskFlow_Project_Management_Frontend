import React, { useState } from 'react'
import styles from './Todo.module.css'
import { TodoListIcon, AddIcon, EditButton } from '../../assets'
import TodoCard from '../todocard/TodoCard';
import useGenerateData from '../../hooks/useGenerateData';


const TodoList = [
    {
        id: 1,
        TodoHeading: "Buy groceries",
        Tags: ["shopping", "essentials"],
        Date: "2024-12-22",
    },
    {
        id: 2,
        TodoHeading: "Complete React project assignment",
        Tags: ["work", "coding", "urgent"],
        Date: "2024-12-23",
    },
    {
        id: 3,
        TodoHeading: "Morning workout",
        Tags: ["health", "fitness"],
        Date: "2024-12-24",
    },
    {
        id: 4,
        TodoHeading: "Schedule team meeting",
        Tags: ["work", "planning"],
        Date: "2024-12-25",
    },
    {
        id: 5,
        TodoHeading: "Read a new book",
        Tags: ["leisure", "learning"],
        Date: "2024-12-26",
    },
    {
        id: 6,
        TodoHeading: "Fix UI bug in dashboard Fix UI bug in dashboard Fix UI bug in dashboard",
        Tags: ["work", "coding"],
        Date: "2024-12-27",
    },
    {
        id: 7,
        TodoHeading: "Plan weekend trip",
        Tags: ["travel", "family"],
        Date: "2024-12-28",
    },
];

const todoColorMap = {}
const Todo = () => {


    const [newTodoHeading, setNewTodoHeading] = useState('')
    const [newTodoTags, setNewTodoTags] = useState([])
    const [tag, setTag] = useState('')
    const [addingNewTodo, setAddingNewTodo] = useState(false)
    const [todos, setTodos] = useState(TodoList)


    const toggleButton = (Setter) => {
        Setter((prev) => !prev)
    }



    const addNewTodo = () => {
        const newTodo = {
            id: todos?.length + 1 || 0,
            TodoHeading: newTodoHeading,
            Tags: newTodoTags,
            Date: useGenerateData()
        }
        const newTodos = [newTodo, ...todos]
        setTodos(newTodos)
        setNewTodoHeading('')
        setNewTodoTags('')
        setAddingNewTodo(false)

    }
    const handleAddTag = () => {
        if (tag?.length === 0) return
        setNewTodoTags((prev) => {
            return [tag, ...prev]
        })
        setTag('')
    }

    const handleRemoveTag = (index) => {

        const newTags = newTodoTags.filter((_, i) => index !== i)
        setNewTodoTags(newTags)
    }


    return (
        <div className={styles.todoContainer}>
            <div className={styles.todoHeader} >

                <p className={styles.todoHeading}>
                    <img src={TodoListIcon} alt="Todo" />
                    Todo
                </p>
                <img src={AddIcon} alt='Add Todos' className={styles.addNewTodoButton} onClick={() => toggleButton(setAddingNewTodo)} />
            </div>

            <div className={`${styles.addTodoContainer}  ${addingNewTodo ? styles?.openAddTodoContainer : ''}`}>
                <label htmlFor="newTodo"   >Todo</label>
                <input
                    type="text"
                    value={newTodoHeading}
                    onChange={(e) => setNewTodoHeading(e.target.value)}
                    placeholder="Add a new task..."
                    className={`${styles.todoInput}`}
                    id='newTodo'
                />
                <label htmlFor="todoTags"   >Tags</label>
                <input
                    type="text"
                    id='todoTags'
                    placeholder="Add a new tag..."
                    className={`${styles.todoInput}`}
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={(e) => e?.key == 'Enter' && handleAddTag()} />
                <p className={styles.todoTagInstruction}>*Hit Enter to add tag</p>
                {newTodoTags && newTodoTags.length > 0 && (
                    <div className={styles.tagList}>
                        {newTodoTags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                                <button
                                    className={styles.removeTagButton}
                                    onClick={() => handleRemoveTag(index)}
                                    aria-label={`Remove tag ${tag}`}
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                )}

                <button className={styles.addButton} disabled={newTodoHeading?.length > 0 ? false : true} onClick={addNewTodo}>Add</button>
            </div>

            <div className={styles.todosCardsContainer}>

                {
                    todos && todos?.length > 0 && todos?.map((todo, index) => (
                        <TodoCard key={index} todo={todo} todoColorMap={todoColorMap} />
                    ))
                }
            </div>
        </div>
    )
}

export default Todo