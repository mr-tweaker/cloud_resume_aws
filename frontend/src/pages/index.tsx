export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Aniket Lamba</h1>
      <p>Cloud / DevOps Engineer</p>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>AWS</li>
          <li>Linux</li>
          <li>Terraform</li>
          <li>CI/CD</li>
        </ul>
      </section>

      <footer>
        <p>
          Visitors: <span id="counter">Loading...</span>
        </p>
      </footer>
    </main>
  );
}
