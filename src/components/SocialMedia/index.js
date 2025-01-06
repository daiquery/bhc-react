import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => (
    <section className="social-media mb-5">
      <h2>Follow Us</h2>
      <p>Stay connected with us on:</p>
      <ul>
        <li>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
          <a
            href="https://www.instagram.com/burneyshotchicken"
            target="_blank"
            rel="noopener noreferrer"
          >
            @burneyshotchicken
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={['fab', 'facebook']} />
          <a
            href="https://www.facebook.com/burneyshotchicken"
            target="_blank"
            rel="noopener noreferrer"
          >
            @burneyshotchicken
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={['fab', 'tiktok']} />
          <a
            href="https://www.tiktok.com/@burneyshotchicken"
            target="_blank"
            rel="noopener noreferrer"
          >
            @burneyshotchicken
          </a>
        </li>
      </ul>
    </section>
  );
  
  export default SocialMedia;
  