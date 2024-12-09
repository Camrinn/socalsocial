import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => (
  <div className="flex space-x-6">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:opacity-75" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:opacity-75" />
    </a>
    <a href="https://www.instagram.com/thesocalsocial/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:opacity-75" />
    </a>
  </div>
);

export default SocialIcons;

