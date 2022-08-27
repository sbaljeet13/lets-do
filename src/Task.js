import { useState } from 'react';
import './Task.css'

export default function Task({id, title, isComplete, handleDeleteClick }) {

    const [complete, setComplete] = useState(isComplete);

    return (
        <li key={id}
            className={ complete ? 'complete' : 'incomplete' }>
            <span
                onClick={() => setComplete(!complete)}>
                {title}
            </span>
            
            <button onClick={handleDeleteClick}>x</button>
        </li>
    );
}