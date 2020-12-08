import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <p>Cruising the information superhighway 🏄</p>
      <p>Coding along the full stack across the way 👨‍💻</p>

      <p>
        Currently doing code at{' '}
        <a href="https://theguardian.com" target="_blank" rel="noreferrer">
          The Guardian
        </a>
        .
      </p>

      <p>
        Previously at{' '}
        <a href="https://netnatives.com/" target="_blank" rel="noreferrer">
          Net Natives
        </a>
        .
      </p>

      <p>Have a look at some of my work, or get in touch</p>
    </Layout>
  );
}
