type RoomCardProps = {
  title: string;
  location: string;
  price: string;
  propertyType: string;
  tenantPreference: string;
  contact: string;
};

export default function RoomCard({
  title,
  location,
  price,
  propertyType,
  tenantPreference,
  contact,
}: RoomCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{location}</p>
      <p>₦{price}</p>
      <p>{propertyType}</p>
      <p>{tenantPreference}</p>
      <p>{contact}</p>
    </div>
  );
}
