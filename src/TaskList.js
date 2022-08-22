export default function TaskList({tasks}) {

    const taskList = tasks.map(
        task => <li key={task.id}>{task.title}</li>
    );
    
    return (
        <ul>{taskList}</ul>
    );
}
