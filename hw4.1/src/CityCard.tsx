import { City } from "./types";

interface CityCardProps {
  city: City;
}
export default function CityCard({ city }: CityCardProps) {
  return (
    <section>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} className="fluid"/>
      <p>{city.description}</p>
      <ul>
        {city.facts.map((val: string) => {
          return <li key={val}>{val}</li>;
        })}
      </ul>
    </section>
  );
}
