"use client"
import { useEffect, useState } from "react";
import CollapsibleCard from "./CollapsibleCard";
import EventTable from "./EventTable";
import ActionButton from "./ActionButton";
import Toast from "./Toast";

const codeString = `<script>
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'surface.start': new Date().getTime(),
    event: 'surface.js'
  });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'surface' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.surface-analytics.com/tag.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'surface', 'SURFACE_TAG_ID');
</script>`;

export default function GettingStarted() {
  const [steps, setSteps] = useState([
    { title: "Install the Surface Tag", completed: false, collapseButtonLabel: "Install tag" },
    { title: "Test Surface Tag Events", completed: false, collapseButtonLabel: "Test tag" }
  ]);
  const [codeSnippet, setCodeSnippet] = useState(codeString);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"info" | "success" | "error">("info");
  const [showToast, setShowToast] = useState(false);

  const updateStepCompletion = (index: number, completed: boolean) => {
    setSteps(steps.map((step, i) => i === index ? { ...step, completed } : step));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setToastMessage("Code snippet copied to clipboard!");
    setToastType("success");
    setShowToast(true);
  };

  const testConnection = async () => {
    setToastMessage("Checking for Tag...");
    setToastType("info");
    setShowToast(true);

    try {
      const response = await fetch('/api/check-tag');
      if (response.ok) {
        setToastMessage("Connected successfully!");
        setToastType("success");
        updateStepCompletion(0, true);
      } else {
        throw new Error("Connection failed");
      }
    } catch (error) {
      setToastMessage("We couldn't detect the Surface Tag on your website. Please ensure the snippet is added correctly.");
      setToastType("error");
    }
    setShowToast(true);
  };

  useEffect(() => {
    // const tagId = generateTagId();
    const tagId = "SL-1234567890";
    setCodeSnippet(codeString.replace('SURFACE_TAG_ID', tagId));
  }, []);

  return (
    <div className="space-y-6">
      <CollapsibleCard
        title={steps?.[0]?.title ?? ""}
        description="Enable tracking and analytics."
        completed={steps?.[0]?.completed ?? false}
        collapseButtonLabel={steps?.[0]?.collapseButtonLabel ?? ""}
      >
        <div className="relative bg-gray-50 p-4 rounded-md border border-gray-200">
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 bg-white text-gray-600 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50"
          >
            Copy Snippet
          </button>
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
            <code>{codeSnippet}</code>
          </pre>
        </div>
        <Toast message={toastMessage} type={toastType} show={showToast} onClose={() => setShowToast(false)} />
        <div className="mt-4 flex justify-end">
          <ActionButton
            actionText="Test connection"
            actionVariant="secondary"
            onClick={testConnection}
          />
        </div>
      </CollapsibleCard>
      <CollapsibleCard
        title={steps?.[1]?.title ?? ""}
        description="Test if the Surface Tag is properly emitting events."
        completed={steps?.[1]?.completed ?? false}
        collapseButtonLabel={steps?.[1]?.collapseButtonLabel ?? ""}
      >
        <EventTable updateStepCompletion={updateStepCompletion} />
      </CollapsibleCard>
    </div>
  );
}
