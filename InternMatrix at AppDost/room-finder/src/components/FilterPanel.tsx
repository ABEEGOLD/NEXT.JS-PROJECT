type FilterProps = {
  location: string;
  minPrice: string;
  maxPrice: string;
  propertyType: string;
  tenantPreference: string;
  onLocationChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onPropertyTypeChange: (value: string) => void;
  onTenantPreferenceChange: (value: string) => void;
};

export default function FilterPanel({
  location,
  minPrice,
  maxPrice,
  propertyType,
  tenantPreference,
  onLocationChange,
  onMinPriceChange,
  onMaxPriceChange,
  onPropertyTypeChange,
  onTenantPreferenceChange,
}: FilterProps) {
  return (
    <div style={{ marginBottom: "20px", padding: "16px", border: "1px solid #ccc" }}>
      <h3>Search Rooms</h3>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => onMinPriceChange(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
      />

      <select
        value={propertyType}
        onChange={(e) => onPropertyTypeChange(e.target.value)}
      >
        <option value="">All Property Types</option>
        <option value="1 Bed">1 Bed</option>
        <option value="2 Bed">2 Bed</option>
        <option value="3 Bed">3 Bed</option>
        <option value="1 BHK">1 BHK</option>
        <option value="2 BHK">2 BHK</option>
      </select>

      <select
        value={tenantPreference}
        onChange={(e) => onTenantPreferenceChange(e.target.value)}
      >
        <option value="">All Tenants</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Family">Family</option>
        <option value="Girls">Girls</option>
        <option value="Working">Working</option>
      </select>
    </div>
  );
}
