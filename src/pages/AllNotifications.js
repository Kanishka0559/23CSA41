import React, { useState } from "react";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";

const AllNotifications = [
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
    
  },

];

function AllNotifications() {
  const [filter, setFilter] = useState("");

  const filteredNotifications =
    filter === ""
      ? AllNotifications
      : AllNotifications.filter(
          (item) => item.type === filter
        );

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      {filteredNotifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default AllNotifications;