import './css/style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <section className="header-left">
          <div className="header-left-item">
            <img src="#" alt="logo" />
            <h1>Prospectus</h1>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Employers</li>
              <li>Freelancers</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </nav>
        </section>

        <section className="header-right">
          <a href="#">Sing In</a>
          <a href="#">Sign Up</a>
        </section>
      </header>
      <main>CONTENT</main>
      <section className="job-search">SEARCH SEACTION</section>
      <footer>FOOTER</footer>
    </div>
  );
};

export default App;
