import './css/style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="header-left">
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
        </div>

        <section className="header-right">
          <a href="#">Sing In</a>
          <a href="#">Sign Up</a>
        </section>
      </header>
      <main>
        <h1>
          START YOUR CAREER HERE|
          <br /> JOIN US!
        </h1>
        <div className="text">
          <p>
            We're among one of the best Job Listing Bootstrap template on the
            Envato marketplace to build a powerful online directory websites.
          </p>
        </div>

        <div className="btn-jobs">
          <a href="#">VIEW ALL JOBS</a>
        </div>
      </main>
      <section className="job-search">
        <div className="search">
          <div className="box-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" id="text" placeholder="Search Keywords" />
          </div>
          <a href="#">Search</a>
        </div>
      </section>
      <footer>
        <section className="contact">
          <h2>CONTACT</h2>

          <ul>
            <li>Video Tutorials</li>
            <li>Live Chat Support</li>
            <li>Email Newsletter</li>
            <li>Follow on Social</li>
            <li>Subscribe to Youtube</li>
            <li>Get In Touch</li>
            <li>Support Forums</li>
            <li>Submit a Ticket</li>
          </ul>
        </section>

        <section className="Network">
          <h2>NETWORK</h2>
          <ul>
            <li>Job Search</li>
            <li>Job Search Map</li>
            <li>Add a Job</li>
            <li>Employer Dashboard</li>
            <li>Employer Listing</li>
            <li>Employer Edit Profile</li>
            <li>Support Forums</li>
            <li>Freelancer Profile</li>
            <li>Freelancer Search</li>
          </ul>
        </section>

        <section className="pages">
          <h2>OUR PAGES</h2>
          <ul>
            <li>About us</li>
            <li>Custom Services</li>
            <li>Shop Page</li>
            <li>Shop Single</li>
            <li>Shop Single Alt</li>
            <li>Shop Cart</li>
            <li>Shop Checkout</li>
            <li>Plans & Pricing</li>
            <li>Testimonials</li>
          </ul>
        </section>

        <section className="company">
          <h2>COMPANY</h2>
          <ul>
            <li>Our Team Members</li>
            <li>Our Team Members</li>
            <li>Worldwide Offices</li>
            <li>Worldwide Meet Up</li>
            <li>Shop Single Alt</li>
            <li>Awards & Reviews</li>
            <li>YourJob in Press</li>
            <li>Carrers</li>
            <li>User Guide</li>
          </ul>
        </section>

        <section className="info">
          <h1>PROSPECTUS</h1>
          <p>
            This is a professional responsive HTML5 job listing, job board and
            freelancer website template. This template available only Envato
            marketplace!
          </p>

          <div className="socials-media">
            <button>F</button>
            <button>E</button>
            <button>G</button>
            <button>H</button>
            <button>I</button>
            <button>J</button>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default App;
