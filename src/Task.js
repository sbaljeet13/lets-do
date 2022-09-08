import { useState } from 'react';
import './Task.css'

export default function Task({id, title, isComplete, isDeleted }) {

    const [complete, setComplete] = useState(isComplete);
    const [deleted, setDeleted] = useState(isDeleted);

    function addClasses (deleted) {
        let classes = deleted ? ' deleted ' : ' not-deleted ';

        return classes;
    }

    return (
        <li key={id}>
            <button onClick={() => setComplete(!complete)}>
                {complete ? '\u2716' : '\u26AB'}
            </button>
            
            <span className={addClasses(deleted)}>
                {title}
            </span>
            
            <button onClick={() => setDeleted(!deleted)}>
                {'\u274C'}
            </button>
        </li>
    );
}