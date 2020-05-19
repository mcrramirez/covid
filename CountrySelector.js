import useDataFeed from "./../utils/useDataFeed";
import Stats from "../components/Stats";
import { useState } from "react";

export default function CountrySelector() {
  const { datafeed: countries, error } = useDataFeed(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [longName, setLongName] = useState("USA");
  if (!countries) return <li>No countries data yet...</li>;
  //const allCountries = Object.entries(countries.countries).map((item) => item);
  //const allCountries = { ...countries };
  console.log(countries);
  return (
    <div>
      <h2>Currently Showing: {longName}</h2>
      <select
        name="ddlCountry"
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setLongName(e.target.options[e.target.selectedIndex].text);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === code.iso3}
            key={Math.random()}
            value={code.iso3}
            text={code.name}
          >
            {code.name}
          </option>
        ))}
      </select>
      <div>&nbsp;</div>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
