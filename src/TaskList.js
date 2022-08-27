import Task from './Task'

export default function TaskList({ tasks, removeTask }) {

    const taskList = tasks.map(t => {
        return (
            <Task 
                key={t.id}
                title={t.title}
                isComplete={t.isComplete}
                handleDeleteClick={() => removeTask(t.id)} />
        )
    });
    
    return (
        <ul>{taskList}</ul>
    );
}
