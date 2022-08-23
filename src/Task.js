import { useState } from 'react';
import './Task.css'

export default function Task({id, title, isComplete}) {
    const [complete, setComplete] = useState(isComplete);

    function handleClick(e) {
        setComplete(!complete);
    }

    return (
        <li
            key={id}
            className={ complete ? 'complete' : 'incomplete' }
            onClick={handleClick}>
            {title}
        </li>
    );
}