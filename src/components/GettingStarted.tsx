import ActionCard from "./ActionCard";

export default function GettingStarted() {
  return (
    <div className="space-y-4">
      <ActionCard
        title="Install Surface Tag on your site"
        description="Enable tracking and analytics."
        actionText="Install tag"
        actionVariant="primary"
      />
      <ActionCard
        title="Test Surface Tag Events"
        description="Test if the Surface Tag is properly emitting events."
        actionText="Test Tag"
        actionVariant="secondary"
      />
    </div>
  );
}
