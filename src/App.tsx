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

  const onDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Tasks</h1>
        <AddTask onAddTask={onAddTask} />
        <TaskList header={<TaskListHeader count={tasks.length} />}>
          {tasks.map((task) => (
            <TaskListItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </TaskList>
      </div>
    </div>
  );
}

export default App;
