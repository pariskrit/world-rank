import styles from "./countriestable.module.css";
import Link from "next/link";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => a.population - b.population);
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => b.population - a.population);
  }

  return countries;
};

const CountriesTable = ({ countries }) => {
  // const orderedCountries = orderBy(countries, "asc");
  return (
    <div className={styles.table}>
      <div className={styles.heading}>
        <button className={styles.button}>Name</button>
        <button className={styles.button}>Population</button>
      </div>
      {countries.map((country) => (
        <Link href={`/country/${country.alpha3Code}`}>
          <a>
            <div className={styles.row}>
              <div className={styles.name}>{country.name}</div>
              <div className={styles.population}>{country.population}</div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;
