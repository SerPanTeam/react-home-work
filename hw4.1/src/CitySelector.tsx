import { City } from "./types"; 

interface CitySelectorProps {
  citiesData: City[]; 
  onCitySelect: (cityName: string) => void; 
  selectedCityName: string;
}

export default function CitySelector({
  citiesData,
  onCitySelect,
  selectedCityName,
}: CitySelectorProps) {
  return (
    <>
      <label htmlFor="city-select">Выберите город:</label>

      <select
        id="city-select"
        value={selectedCityName}
        onChange={(e) => onCitySelect(e.target.value)}
      >
        {citiesData.map((val, i) => {
          return (
            <option key={i + "-" + val.name} value={val.name}>
              {val.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
