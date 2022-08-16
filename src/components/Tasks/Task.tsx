import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
    task: string;
    onDeleteTask: (text: string) => void;
    onCompleteTask: (isChecked: boolean) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
    const [isChecked, setChecked] = useState(false);

    function handleDeleteTask(task: string) {
        onDeleteTask(task);

        if (isChecked) {
            onCompleteTask(false);
        }
    }

    function handleCompletedTask() {
        setChecked(!isChecked);
        onCompleteTask(!isChecked);
    }

    return (
        <div className={styles.task}>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id={`checkbox-${task}`} onChange={handleCompletedTask} />
                <label htmlFor={`checkbox-${task}`}></label>
            </div>
            <p className={isChecked ? styles.lineThrough : ''}>{task}</p>
            <button onClick={() => handleDeleteTask(task)} title="Deletar tarefa">
                <Trash size={24} />
            </button>
        </div>
    );
}