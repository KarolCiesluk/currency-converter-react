import "./style.css";

const Header = ({ children }) => (
    <header>
        <h1 className="header">{children}</h1>
    </header>
);

export default Header;