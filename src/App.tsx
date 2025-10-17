type Priority = "p1" | "p2" | "p3";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const tasks: Task[] = [
    { id: 1, title: "Learn React", isCompleted: false },
    { id: 2, title: "Learn TypeScript", isCompleted: false },
  ];

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
