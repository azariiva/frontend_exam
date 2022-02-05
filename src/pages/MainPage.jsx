import React from "react";
import { observer } from "mobx-react";
import {Col, Container, Spinner, Row, Image} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';

const MainPage = observer(() => {
    const [jsonContent, setJsonContent] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        fetch("https://demo-api.vsdev.space/api/elonus/home_page")
            .then((res) => res.json())
            .then((data) => {
                setJsonContent(data)
                setLoading(false)
            })
    }, []);

    return (
        <Container>
            {loading ? (
                <Spinner animation={"border"} role={"status"} className={"align-jsonContent-center"}>
                    <span className="visually-hidden">Загрузка...</span>
                </Spinner>
            ) : (
                <Container>
                    <Row style={{justifyContent: "center"}}>
                        <Col style={{width: "50%"}}>
                            {ReactHtmlParser(jsonContent.text)}
                        </Col>
                        <Col style={{width: "50%"}}>
                            <Image src={jsonContent.image} fluid={"true"}></Image>
                        </Col>
                    </Row>
                </Container>
            )}
        </Container>
    );
});

export default MainPage;