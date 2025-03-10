import "./Footer.css";

interface FooterProps {} // No props needed

const Footer: React.FC<FooterProps> = () => (
  <footer className="footer">
    <a href="/" className="link footer__link">
      Created By Kene Arionye
    </a>
  </footer>
);

export default Footer;
