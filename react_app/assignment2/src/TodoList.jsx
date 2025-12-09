import './TodoList.css';

// copied function from original App.jsx, added remove button (but didnt make it work), made it a component
export function Todo({ item, i }) {
    return (
        <li key={"todo-" + i} className="todo-item">
            <input
                type="checkbox"
                className="todo-item__checkbox"
                data-id={i}
                id={"todo-" + i}
            />
            <label htmlFor={"todo-" + i} className="todo-item__label">
                {item.name}
            </label>

            {/* remove button */}
            <button className="todo-item__remove-button">
                Remove
            </button>
        </li>
    );
}
