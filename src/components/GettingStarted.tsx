import CollapsibleCard from "./CollapsibleCard";
import EventTable from "./EventTable";

export default function GettingStarted() {
  return (
    <div className="space-y-4">
      <CollapsibleCard
        title="Install the Surface Tag"
        description="Enable tracking and analytics."
      >
        <pre className="whitespace-pre-wrap">
          <code>
            {`<script>
(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    'surface.start': new Date().getTime(),
    event: 'surface.js'
  });
});
var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'surface' ? '&l=' + l : '';
j.async = true;
j.src = 'https://www.surface-analytics.com/tag.js?id=' + i + dl;
f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'surface', 'SURFACE_TAG_ID');
</script>`}
          </code>
        </pre>
        <p className="mt-2 text-green-600">Connected successfully!</p>
      </CollapsibleCard>
      <CollapsibleCard
        title="Test Surface Tag Events"
        description="Test if the Surface Tag is properly emitting events."
      >
        <EventTable />
      </CollapsibleCard>
    </div>
  );
}
