import styles from './EmptyTasks.module.css';
import EmptyTasksIcon from '../../assets/EmptyTasks.svg';

export function EmptyTasks() {
    return (
        <div className={styles.wrapper}>
            <img src={EmptyTasksIcon} alt="empty logo" />
            <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    );
}