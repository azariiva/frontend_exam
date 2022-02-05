import React from "react";
import {Col, Container, Image, Row, Spinner} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {observer} from "mobx-react";

const AboutPage = observer(() => {
    const [jsonContent, setJsonContent] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        fetch("https://demo-api.vsdev.space/api/elonus/about_page")
            .then((res) => res.json())
            .then((data) => setJsonContent(data))
            .then(_ => setLoading(false))
    }, []);

    return (
        <Container>
            {loading ? (
                <Spinner animation={"border"} role={"status"}>
                    <span className="visually-hidden">Загрузка...</span>
                </Spinner>
            ) : (
                <Container>
                    {ReactHtmlParser(jsonContent.text)}
                </Container>
            )}
        </Container>
    );
})

export default AboutPage;