import type { Task } from "./types";

type TaskListItemProps = {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export default function TaskListItem({
  task,
  onToggleTask,
  onDeleteTask,
}: TaskListItemProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggleTask(task.id)}
          aria-label={task.title}
        />
        {task.title}
      </label>
      <button
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </li>
  );
}
