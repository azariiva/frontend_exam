import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {Col, Container, Row} from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage"
import AboutPage from "./pages/AboutPage";
import LeftWidget from "./components/LeftWidget";
import EventsPage from "./pages/EventsPage";

function App() {
    return (
        <div>
            <Header/>
            <Row>
                <Col xs={3}>
                    <Sidebar location={window.location}/>
                    <LeftWidget/>
                </Col>
                <Col xs={9}>
                    <Switch>
                        <Route exact path={"/"} component={MainPage}/>
                        <Route exact path={"/about"} component={AboutPage}/>
                        <Route exact path={"/events"} component={EventsPage}/>
                    </Switch>
                </Col>
            </Row>
        </div>
    )
}

export default App