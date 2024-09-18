interface ActionCardProps {
  title: string;
  description: string;
  actionText: string;
  actionVariant: "primary" | "secondary";
}

export default function ActionCard({
  title,
  description,
  actionText,
  actionVariant,
}: ActionCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        className={`rounded-md px-4 py-2 text-sm font-medium ${
          actionVariant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        {actionText}
      </button>
    </div>
  );
}
