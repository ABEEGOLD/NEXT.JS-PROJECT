"use client";

import { useRooms } from "@/context/RoomContext";

export default function OwnerDashboard() {
  const { rooms, deleteRoom } = useRooms();
    console.log("Rooms in owner:", rooms);


  return (
    <main style={{ padding: "20px" }}>
      <h1>Owner Dashboard</h1>
     

      {rooms.length === 0 && <p>No rooms added yet.</p>}
        
      {rooms.map((room) => (
        <div key={room.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{room.title}</h3>
          <p>{room.location}</p>
          <p>₦{room.price}</p>
          <p>{room.propertyType}</p>
          <p>{room.tenantPreference}</p>
          <p>{room.contact}</p>
            
          <button onClick={() => deleteRoom(room.id)}>Delete</button>
        </div>
      ))}
    </main>
  );
}
