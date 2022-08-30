import Task from './Task'

export default function TaskList({ tasks }) {

    const taskList = tasks.map(t => {
        return (
            <Task 
                key={t.id}
                title={t.title}
                isComplete={t.isComplete}
                isDeleted={t.isDeleted} />
        )
    });
    
    return (
        <ul>{taskList}</ul>
    );
}
