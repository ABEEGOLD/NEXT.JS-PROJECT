"use client";

import { useRooms } from "@/context/RoomContext";
import { useState, useEffect } from "react";
import RoomCard from "@/components/RoomCard";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const { rooms } = useRooms();

  // Supabase test inside the component
  useEffect(() => {
    const testSupabase = async () => {
      const { data, error } = await supabase.from("rooms").select("*");
      console.log("Supabase rooms:", data, error);
    };

    testSupabase();
  }, []);

  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [tenantPreference, setTenantPreference] = useState("");

  const filteredRooms = rooms.filter((room) => {
    return (
      room.location.toLowerCase().includes(location.toLowerCase()) &&
      (!minPrice || Number(room.price) >= Number(minPrice)) &&
      (!maxPrice || Number(room.price) <= Number(maxPrice)) &&
      (!propertyType || room.propertyType === propertyType) &&
      (!tenantPreference || room.tenantPreference === tenantPreference)
    );
  });

  return (
    <main style={{ padding: "20px" }}>
      <h1>Available Rooms</h1>

      <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="">All Property Types</option>
        <option value="1 Bed">1 Bed</option>
        <option value="2 Bed">2 Bed</option>
        <option value="3 Bed">3 Bed</option>
      </select>

      <select
        value={tenantPreference}
        onChange={(e) => setTenantPreference(e.target.value)}
      >
        <option value="">All Tenants</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Family">Family</option>
      </select>

      {filteredRooms.length === 0 && <p>No rooms available.</p>}

      {filteredRooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </main>
  );
}
