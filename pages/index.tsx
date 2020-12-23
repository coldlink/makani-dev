import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout center>
      <p>Cruising the information superhighway 🏄</p>
      <p>Coding along the full stack across the way 👨‍💻</p>
      <p>Based in Hertfordshire and London, UK</p>
      <img
        src="mahesh.jpg"
        alt="Mahesh Makani | Photo"
        className="avatar"
        width="100"
        height="100"
      ></img>
    </Layout>
  );
}
