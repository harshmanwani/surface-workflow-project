(function (w, d) {
  function getVisitorId() {
    let visitorId = localStorage.getItem('surface_visitor_id');
    if (!visitorId) {
      visitorId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
      localStorage.setItem('surface_visitor_id', visitorId);
    }
    return visitorId;
  }

  const visitorId = getVisitorId();

  function sendEvent(eventData) {
    fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...eventData,
        visitor: visitorId,
        createdAt: new Date().toISOString(),
      }),
    })
    .then(response => response.json())
    .then(data => console.log('Event sent to backend:', data))
    .catch(error => console.error('Error sending event to backend:', error));
  }

  // Track script initialization
  sendEvent({
    event: 'Track',
    metadata: JSON.stringify({}),
  });

  // Track page view
  sendEvent({
    event: 'Page',
    metadata: JSON.stringify({ page_url: w.location.href }),
  });

  // Track form submission
  const form = d.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      sendEvent({
        event: 'Form Submission',
        metadata: JSON.stringify(data),
      });
    });
  }

  // Track click on page element
  d.addEventListener('click', function(e) {
    if (e.target.id) {
      sendEvent({
        event: 'Click',
        metadata: JSON.stringify({ element_id: e.target.id }),
      });
    }
  });

})(window, document);