import React from "react";
import {Container, Card, Spinner, Row, Col} from "react-bootstrap";
import {observer} from "mobx-react";

const mapping = {
    "acid_power": "Сила кислоты",
    "wind_speed": "Скорость ветра",
    "earthquake_power": "Амплитуда землетрясения",
    "date": "Дата события",
    "victims": "Марсиан пострадало",
    "acid_rain": "Кислотный дождь",
    "hurricane": "Ураган",
    "earthquake": "Землетрясение"
}

function getDescription(event = {}) {
    switch (event.type) {
        case "acid_rain":
            return mapping["acid_power"] + ": " + event.acid_power
        case "hurricane":
            return mapping["wind_speed"] + ": " + event.wind_speed
        case "earthquake":
            return mapping["earthquake"] + ": " + event.earthquake_power
        default:
            return ""
    }
}

const EventsPage = observer(() => {
    const [jsonContent, setJsonContent] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true)
        fetch("https://demo-api.vsdev.space/api/elonus/events")
            .then((res) => res.json())
            .then(data => setJsonContent(data))
            .then(_ => setLoading(false))
    }, [])

    return (
        <Container>
            {loading ? (
                    <Spinner animation={"border"} role={"status"} className={"align-jsonContent-center"}>
                        <span className="visually-hidden">Загрузка...</span>
                    </Spinner>
                ) :
                (<Row xs={1} md={2} className={"g-4 mt-1"}>
                    {jsonContent.map(event =>
                        <Col>
                            <Card>
                                <Card.Title>{mapping[event.type]}</Card.Title>
                                <Card.Text>
                                    {getDescription(event)}
                                </Card.Text>
                                <Card.Text>
                                    {mapping["victims"]}: {event.victims}
                                </Card.Text>
                                <Card.Footer>
                                    {mapping["date"]}: {event.date}
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>)}
        </Container>
    )
})

export default EventsPage;
