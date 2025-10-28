import TaskListItem from "./TaskItemList";
import type { Task } from "./types";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskListItem key={task.id} title={task.title} />
      ))}
    </ul>
  );
}
