type TaskListHeaderProps = {
  count: number;
};
export default function TaskListHeader({ count }: TaskListHeaderProps) {
  return (
    <p className="text-sm text-gray-500 mb-4">
      {count} {count === 1 ? "task" : "tasks"}
    </p>
  );
}
