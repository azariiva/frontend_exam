import React from "react";
import {Container, Card} from "react-bootstrap";
import {observer} from "mobx-react";

const LeftWidget = observer(() => {
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true);

    fetch("https://demo-api.vsdev.space/api/elonus/left_widget")
        .then((res) => res.json())
        .then((data) => {
            setContent(data)
            setLoading(false)
        })

    return (
        loading ? (<span className="visually-hidden">Загрузка...</span>) : (
            <Container>
                <Card bg={"dark"} text={"white"}>
                    <Card.Text>Зарегистрировано погодных событий: {content.events}</Card.Text>
                </Card>
            </Container>
        )
    )
});

export default LeftWidget;