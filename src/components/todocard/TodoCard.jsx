import React, { useState } from 'react'
import styles from './TodoCard.module.css'

const colors = [
    { name: "--var_orange", value: "rgba(255, 165, 0, 1)" },
    { name: "--var_dark_green", value: "rgba(34, 139, 34, 1)" },
    { name: "--var_sky_blue", value: "rgba(135, 206, 235, 1)" },
    { name: "--var_pink", value: "rgba(255, 105, 180, 1)" },
    { name: "--var_purple", value: "rgba(128, 0, 128, 1)" },
    { name: "--var_blue", value: "rgba(0, 0, 139, 1)" },
];



const TodoCard = ({ todo, todoColorMap }) => {
    const [isChecked, setIsChecked] = useState(false)
    

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const getColorForItem = (itemId) => {
        if (!todoColorMap[itemId]) {
            todoColorMap[itemId] = getRandomColor();
        }
        return todoColorMap[itemId];
    };


    return (
        <div className={styles.todoCard}>
            <div className={`${styles.todoTask} ${isChecked ? styles.todoChecked : null}`}>
                <input type="checkbox"
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <p>{todo?.TodoHeading}</p>
            </div>
           

            <div className={styles.todoTaskDetails}>
                {todo?.Tags && todo?.Tags.length > 0 && (
                    <div className={styles.todoTaskTags}>
                        {todo?.Tags.map((tag, index) => {
                            const color = getColorForItem(index + todo.id);
                            const backgroundColor = color.value.replace(/, 1\)/, ", 0.1)");

                            return <p
                                style={{
                                    backgroundColor,
                                    border: `1px solid ${color.value}`,
                                    color: color.value,
                                }}
                                key={index}>{tag}</p>

                        }
                        )}
                    </div>
                )}
                <div className={styles.todoTaskDate}>{todo?.Date}</div>
            </div>

        </div>
    )
}

export default TodoCard