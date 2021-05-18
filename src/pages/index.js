import { useState } from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput/SearchInput";

export default function Home({ countries }) {
  const [keywords, setKeywords] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keywords)
  );

  const handleInput = (e) => {
    setKeywords(e.target.value);
  };
  return (
    <Layout>
      <div>
        {countries.length} countries found
        <SearchInput
          placeholder="Enter Country Name,Continent,regions..."
          type="text"
          onChange={handleInput}
        />
      </div>
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}
