import Layout from "../../components/Layout";

const Country = ({ country }) => {
  return (
    <Layout title={country.name}>
      <h1>{country.name.toUpperCase()}</h1>
      <h1>{country.population}</h1>
    </Layout>
  );
};

export default Country;

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  const paths = data
    .slice(0, 5)
    .map((country) => ({ params: { id: country.alpha3Code } }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`
    https://restcountries.eu/rest/v2/alpha/${params.id}`);

  const country = await res.json();

  return {
    props: {
      country,
    },
  };
}
