import { useState } from 'react';

import { EmptyTasks } from './EmptyTasks';
import { Task } from './Task';

import styles from './Tasks.module.css';

interface TasksProps {
    tasks: string[];
    onDeleteTask: (text: string) => void;
}

export function Tasks({ tasks, onDeleteTask }: TasksProps) {
    const [countCompletedTasks, setCountCompletedTasks] = useState<number>(0);

    function onCompleteTask(isChecked: boolean) {
        if (isChecked) {
            setCountCompletedTasks(countCompletedTasks + 1);
        } else {
            setCountCompletedTasks(countCompletedTasks - 1);
        }
    }

    const allTasksSize = tasks.length;

    return (
        <>
            <header className={styles.tasksHeader}>
                <div className={styles.tasksCreated}>
                    <span>Tarefas criadas</span>
                    <span>{allTasksSize}</span>
                </div>
                <div className={styles.tasksCompleted}>
                    <span>Tarefas concluidas</span>
                    <span>{countCompletedTasks} de {allTasksSize}</span>
                </div>
            </header>

            {tasks.length > 0 ?
                <div className={styles.tasksList}>
                    {tasks.map(task => (
                        <Task key={task} task={task} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />
                    ))}
                </div>
                : <EmptyTasks />}
        </>
    );
}