import React from "react";
import NotificationCard from "../components/NotificationCard";

const priorityNotifications = [
  {
    id: 1,
    type: "Result",
    message: "mid-sem",
    timestamp: "2026-04-22 17:51:30",
    
  },
  {
    id: 2,
    type: "Placement",
    message: "CSX Campus hiring",
    timestamp: "2026-04-22 17:51:18",
    
  },
  {
    id: 3,
    type: "Event",
    message: "Farewell",
    timestamp: "2026-04-22 17:51:06",
  },
  {
    id: 4,
    type: "Result",
    message: "mid-sem",
    timestamp: "2026-04-22 17:50:54",
    
  }
];

function PriorityNotifications() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Notifications</h2>

      {priorityNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;