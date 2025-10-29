import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import type { Task } from "./types";
import TaskListItem from "./TaskItemList";
import TaskListHeader from "./TaskListHeader";

function App() {
  // acting db for tasks
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false }, // Date.now() is just a placeholder -> real db handles this automatically
    ]);
  };

  const onToggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} onToggleTask={onToggleTask} />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
