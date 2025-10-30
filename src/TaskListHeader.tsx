type TaskListHeaderProps = {
  count: number;
  darkMode: boolean;
};
export default function TaskListHeader({
  count,
  darkMode,
}: TaskListHeaderProps) {
  return (
    <p
      className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
    >
      {count} {count === 1 ? "task" : "tasks"}
    </p>
  );
}
