"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Room = {
  id: number;
  title: string;
  location: string;
  price: string;
  propertyType: string;
  tenantPreference: string;
  contact: string;
};

type RoomContextType = {
  rooms: Room[];
  addRoom: (room: Room) => void;
  deleteRoom: (id: number) => void;
};

const RoomContext = createContext<RoomContextType | null>(null);

export function RoomProvider({ children }: { children: React.ReactNode }) {
  const [rooms, setRooms] = useState<Room[]>([]);

  // Load from localStorage on first load
  useEffect(() => {
    const storedRooms = localStorage.getItem("rooms");
    if (storedRooms) {
      setRooms(JSON.parse(storedRooms));
    }
  }, []);

  // Save to localStorage whenever rooms change
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  const addRoom = (room: Room) => {
    setRooms((prev) => [...prev, room]);
  };

  const deleteRoom = (id: number) => {
    setRooms((prev) => prev.filter((room) => room.id !== id));
  };

  return (
    <RoomContext.Provider value={{ rooms, addRoom, deleteRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

export const useRooms = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRooms must be used within RoomProvider");
  }
  return context;
};
