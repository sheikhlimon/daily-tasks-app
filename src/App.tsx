import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import type { Task } from "./types";
import TaskListItem from "./TaskItemList";

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
      <TaskList>
        <ul>
          {tasks.map((task) => (
            <TaskListItem key={task.id}>{task.title}</TaskListItem>
          ))}
        </ul>
      </TaskList>
    </div>
  );
}

export default App;
