import './Form.css'

export default function Form({ newTask, onTextChange, onClick }) {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
            }}>
            <input 
                value={newTask} 
                onChange={ e => onTextChange(e.target.value) } 
                type='text' 
                className='input-box' 
                placeholder='Add task' />
            <button 
                className='add-button' 
                onClick={onClick}>
                Add
            </button>
        </form>
    );
}
