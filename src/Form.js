import './Form.css'

export default function Form({ newTask, onChange, onClick }) {
    return (
        <div>
            <input value={newTask} onChange={onChange} type='text' className='input-box' placeholder='Add task' />
            <button className='add-button' onClick={onClick}>Add</button>
        </div>
    );
}
