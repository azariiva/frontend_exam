import React from "react";
import {Container, Card} from "react-bootstrap";
import {observer} from "mobx-react";

const LeftWidget = observer(() => {
    const [jsonContent, setJsonContent] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        fetch("https://demo-api.vsdev.space/api/elonus/left_widget")
            .then((res) => res.json())
            .then((data) => setJsonContent(data))
            .then(_ => setLoading(false))
    }, [])

    return (
        loading ? (<span className="visually-hidden">Загрузка...</span>) : (
            <Container>
                <Card bg={"dark"} text={"white"}>
                    <Card.Text>Зарегистрировано погодных событий: {jsonContent.events}</Card.Text>
                </Card>
            </Container>
        )
    )
});

export default LeftWidget;