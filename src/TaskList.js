import Task from './Task'

export default function TaskList({ tasks }) {

    const taskList = tasks.map(t => {
        return (
            <Task 
                key={t.id}
                title={t.title}
                isComplete={t.isComplete} />
        )
    });
    
    return (
        <ul>{taskList}</ul>
    );
}
