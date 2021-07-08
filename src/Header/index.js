import { Title } from "./styled";

const Header = ({ children }) => (
    <header>
        <Title>{children}</Title>
    </header>
);

export default Header;