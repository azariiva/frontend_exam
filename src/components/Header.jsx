import React from "react";
import {Navbar, Container} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg={"black"} expand={"lg"} variant={"dark"}>
            <Container>
                <Navbar.Brand href={"/"}>
                    <img alt={""} src={"/logo.png"}
                         width={"30"}
                         height={"30"}
                         className="d-inline-block align-top"
                         />
                    Elonus
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;