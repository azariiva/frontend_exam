import {Navbar, Container, Nav} from "react-bootstrap"

const Sidebar = ({location}) => {
    return (
        <Nav variant="pills" className={"flex-column"} activeKey={location.pathname} fill={"true"}>
            <Nav.Link href={"/"}>Главная</Nav.Link>
            <Nav.Link href={"/events"}>События</Nav.Link>
            <Nav.Link href={"/about"}>О нас</Nav.Link>
        </Nav>
    );
}

export default Sidebar;