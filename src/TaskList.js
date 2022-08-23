import Task from './Task'

export default function TaskList({ tasks }) {

    const taskList = tasks.map(task => {
        return (
            <Task 
                id={task.id}
                title={task.title}
                isComplete={task.isComplete} />
        )
    });
    
    return (
        <ul>{taskList}</ul>
    );
}
