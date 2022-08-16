import { ChangeEvent, FormEvent, InvalidEvent, KeyboardEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';
import { Header } from './components/Header/Header';

import styles from './App.module.css';
import { Tasks } from './components/Tasks/Tasks';
import './global.css';

export function App() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTaskValue, setNewTaskValue] = useState("");

    function handleCreateNewTask(event: FormEvent | KeyboardEvent) {
        event.preventDefault();
        setTasks([...tasks, newTaskValue]);
        setNewTaskValue("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("");
        setNewTaskValue(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Este campo é obrigatório");
    }

    function onDeleteTask(text: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task !== text);

        setTasks(tasksWithoutDeletedOne);
    }

    function onEnterPress(event: KeyboardEvent<HTMLTextAreaElement>) {
        if (event.key === "Enter" && event.shiftKey == false) {
            handleCreateNewTask(event);
        }
    }

    const isNewTaskEmpty = newTaskValue.length === 0;

    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
                    <textarea
                        value={newTaskValue}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        placeholder="Adicione uma nova tarefa"
                        onKeyDown={onEnterPress}
                        required
                    />
                    <button type="submit" disabled={isNewTaskEmpty}>
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </form>

                <Tasks tasks={tasks} onDeleteTask={onDeleteTask} />
            </div>
        </>
    )
}
