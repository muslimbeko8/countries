import React, { useEffect, useState } from "react";
import FlagsCard from "./FlagsCard";

export default function Flags() {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    const fetchFlags = async () => {
      const response = await fetch(selectedRegion);
      setData(await response.json());
    };

    fetchFlags();
  }, [selectedRegion]);

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="pt-12 flex justify-between">
        <input
          type="search"
          placeholder="Search for a country…"
          className="input input-bordered w-full max-w-xs"
        />

        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleChange}
            value={selectedRegion}
          >
            <option value="">Filter by Region</option>
            <option value="https://restcountries.com/v3.1/all">All</option>
            <option value="https://restcountries.com/v3.1/region/africa">
              Africa
            </option>
            <option value="https://restcountries.com/v3.1/region/americas">
              Americas
            </option>
            <option value="https://restcountries.com/v3.1/region/asia">
              Asia
            </option>
            <option value="https://restcountries.com/v3.1/region/europe">
              Europe
            </option>
            <option value="https://restcountries.com/v3.1/region/oceania">
              Oceania
            </option>
          </select>
        </div>
      </div>

      <div className="pt-12 grid grid-cols-4 gap-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:py-3 ">
        {data.map((country) => (
          <FlagsCard obj={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}
