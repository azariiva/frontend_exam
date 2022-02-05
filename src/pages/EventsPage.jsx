import React from "react";
import {Container, Card, Spinner} from "react-bootstrap";
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
            loading ? (
            <Spinner animation={"border"} role={"status"} className={"align-jsonContent-center"}>
                <span className="visually-hidden">Загрузка...</span>
            </Spinner>
            ) : (
            {jsonContent.map(event =>
                <Card xs={1} md={2}>
                    <Card.Title>{mapping[event.type]}</Card.Title>
                    <Card.Text>
                        {event.toString()}
                        {mapping["victims"]}: {event.victims}
                    </Card.Text>
                    <Card.Footer>
                        {mapping["date"]}: {event.date}
                    </Card.Footer>
                </Card>
            )})
        </Container>
    )
})

export default EventsPage;
