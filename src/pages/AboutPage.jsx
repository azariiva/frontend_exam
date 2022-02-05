import React from "react";
import {Col, Container, Image, Row, Spinner} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import {observer} from "mobx-react";

const AboutPage = observer(() => {
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        fetch("https://demo-api.vsdev.space/api/elonus/about_page")
            .then((res) => res.json())
            .then((data) => {
                setContent(data)
                setLoading(false)
            })
    }, []);

    return (
        <Container>
            {loading ? (
                <Spinner animation={"border"} role={"status"}>
                    <span className="visually-hidden">Загрузка...</span>
                </Spinner>
            ) : (
                <Container>
                    {ReactHtmlParser(content.text)}
                </Container>
            )}
        </Container>
    );
})

export default AboutPage;