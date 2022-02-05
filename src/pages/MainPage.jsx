import React from "react";
import { observer } from "mobx-react";
import {Col, Container, Spinner, Row, Image} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';

const MainPage = observer(() => {
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        fetch("https://demo-api.vsdev.space/api/elonus/home_page")
            .then((res) => res.json())
            .then((data) => {
                setContent(data)
                setLoading(false)
            })
    }, []);

    return (
        <Container>
            {loading ? (
                <Spinner animation={"border"} role={"status"} className={"align-content-center"}>
                    <span className="visually-hidden">Загрузка...</span>
                </Spinner>
            ) : (
                <Container>
                    <Row>
                        <Col xs={2}>
                            {ReactHtmlParser(content.text)}
                        </Col>
                        <Col xs={2}>
                            <Image src={content.image} fluid={"true"}></Image>
                        </Col>
                    </Row>
                </Container>
            )}
        </Container>
    );
});

export default MainPage;