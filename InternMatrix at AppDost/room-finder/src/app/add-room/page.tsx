"use client";

import { useState } from "react";
import { useRooms } from "@/context/RoomContext";

export default function AddRoom() {
  const { addRoom } = useRooms();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [tenantPreference, setTenantPreference] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addRoom({
      id: Date.now(),
      title,
      location,
      price,
      propertyType,
      tenantPreference,
      contact,
    });

    setTitle("");
    setLocation("");
    setPrice("");
    setPropertyType("");
    setTenantPreference("");
    setContact("");
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Add Room</h1>

      <form onSubmit={handleSubmit}>
        
        <input placeholder="Room Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="number" placeholder="Rent Price" value={price} onChange={(e) => setPrice(e.target.value)} />

        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
          <option value="">Select Property Type</option>
          <option value="1 Bed">1 Bed</option>
          <option value="2 Bed">2 Bed</option>
          <option value="3 Bed">3 Bed</option>
        </select>

        <select value={tenantPreference} onChange={(e) => setTenantPreference(e.target.value)}>
          <option value="">Tenant Preference</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Family">Family</option>
          <option value="Other">Other</option>
        </select>

        <input placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />

        <button type="submit">Add Room</button>
      </form>
    </main>
  );
}
