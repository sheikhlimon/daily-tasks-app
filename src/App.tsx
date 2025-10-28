import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import type { Task } from "./types";

function App() {
  // acting db for tasks
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false }, // Date.now() is just a placeholder -> real db handles this automatically
    ]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
