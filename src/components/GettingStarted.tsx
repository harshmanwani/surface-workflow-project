"use client"
import { useState } from "react";
import CollapsibleCard from "./CollapsibleCard";
import EventTable from "./EventTable";

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
    { title: "Install the Surface Tag", completed: false },
    { title: "Test Surface Tag Events", completed: false }
  ]);

  const updateStepCompletion = (index: number, completed: boolean) => {
    setSteps(steps.map((step, i) => i === index ? { ...step, completed } : step));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code snippet copied to clipboard!");
  };

  return (
    <div className="space-y-6">
      <CollapsibleCard
        title={steps?.[0]?.title ?? ""}
        description="Enable tracking and analytics."
        completed={steps?.[0]?.completed ?? false}
      >
        <div className="relative bg-gray-50 p-4 rounded-md border border-gray-200">
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 bg-white text-gray-600 px-3 py-1.5 rounded-md text-sm font-medium border border-gray-200 hover:bg-gray-50"
          >
            Copy Snippet
          </button>
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
            <code>{codeString}</code>
          </pre>
        </div>
        <p className="mt-4 text-sm text-green-600 font-medium">Connected successfully!</p>
      </CollapsibleCard>
      <CollapsibleCard
        title={steps?.[1]?.title ?? ""}
        description="Test if the Surface Tag is properly emitting events."
        completed={steps?.[1]?.completed ?? false}
      >
        <EventTable />
      </CollapsibleCard>
    </div>
  );
}
