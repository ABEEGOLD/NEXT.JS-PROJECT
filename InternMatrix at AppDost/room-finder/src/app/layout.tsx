import { RoomProvider } from "@/context/RoomContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RoomProvider>{children}</RoomProvider>
      </body>
    </html>
  );
}
