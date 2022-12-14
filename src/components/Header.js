import "../styles/components/Header.scss";

const Header = ({ logo }) => {
  return (
    <header className="header">
      <img
        className="header_logo"
        src={logo}
        alt="Rick and Morty logo"
        title="Rick and Morty logo"
      />
    </header>
  );
};

export default Header;
