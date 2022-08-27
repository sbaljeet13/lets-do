import { useState } from 'react';
import './Task.css'

export default function Task({id, title, isComplete, handleDeleteClick }) {

    const [complete, setComplete] = useState(isComplete);

    return (
        <li key={id}>
            <span
                className={ complete ? 'complete' : 'incomplete' }
                onClick={() => setComplete(!complete)}>
                {title}
            </span>
            
            <button onClick={handleDeleteClick}>x</button>
        </li>
    );
}