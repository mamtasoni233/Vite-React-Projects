// import React from 'react'
import TodoItem1 from './TodoItem1'

// eslint-disable-next-line react/prop-types
export default function TodoItems({ todoItemsList }) {
    // eslint-disable-next-line react/prop-types
    const item = todoItemsList.map((item, index) => {
        return <TodoItem1 key={index} todoDate={item.dueDate} todoName={item.name} />
    })
    return (
        <>
            <div className="align-left">
                {item}

            </div>
        </>
    )
}
