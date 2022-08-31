import { useState } from 'react';
import './Task.css'

export default function Task({id, title, isComplete, isDeleted }) {

    const [complete, setComplete] = useState(isComplete);
    const [deleted, setDeleted] = useState(isDeleted);

    function addClasses (complete, deleted) {
        let classes = complete ? ' complete ' : ' incomplete ';
        classes += deleted ? ' deleted ' : ' not-deleted '

        return classes;
    }

    return (
        <li key={id}
            className={addClasses(complete, deleted)}>
            <span
                onClick={() => setComplete(!complete)}>
                {title}
            </span>
            
            <button onClick={() => setDeleted(!deleted)}>x</button>
        </li>
    );
}