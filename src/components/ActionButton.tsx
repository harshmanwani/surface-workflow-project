interface ActionButtonProps {
  actionText: string;
  actionVariant: "primary" | "secondary";
  onClick?: () => any;
}

export default function ActionButton({
  actionText,
  actionVariant,
  onClick = () => null,
}: ActionButtonProps) {
  return (
    <button
      className={`rounded-md px-4 py-2 text-sm font-medium ${actionVariant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      onClick={onClick}
    >
      {actionText}
    </button>
  );
}
