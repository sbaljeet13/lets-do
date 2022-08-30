import { useState } from 'react';
import './Task.css'

export default function Task({id, title, isComplete, isDeleted }) {

    const [complete, setComplete] = useState(isComplete);
    const [deleted, setDeleted] = useState(isDeleted);

    // set the isDeleted property 
    return (
        <li key={id}
            className={ complete ? 'complete' : 'incomplete' }>
            <span
                onClick={() => setComplete(!complete)}>
                {title}
            </span>
            
            <button onClick={() => setDeleted(!deleted)}>x</button>
        </li>
    );
}