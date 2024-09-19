"use client"
import React, { useState, useEffect } from "react";
import ActionCard from "./ActionButton";

export interface Event {
  id: number;
  event: string;
  visitor: string;
  metadata: string;
  createdAt: Date;
}

export default function EventTable() {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const fetchedEvents = await response.json();
      setEvents(fetchedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visitor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metadata</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.event}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.visitor}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.metadata}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(event.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ActionCard
        title="Test Tag"
        description="Ensure the Surface Tag is functioning correctly."
        actionText="Test Tag"
        actionVariant="secondary"
        onClick={fetchEvents}
      />
    </div>
  );
}
