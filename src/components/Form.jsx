import React from 'react';

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
const Form = () => {

    const [cond, setCond] = React.useState('acid_rain');

    const Zxc = () => {
        if (cond === 'earthquake') return (<input id="earthquake_power" placeholder='Амплитуда землетрясения'/>)
        if (cond === 'hurricane') return (<input id="wind_speed" placeholder='Скорость ветра'/>)
        if (cond === 'acid_rain') return (<input id="acid_power" placeholder='Сила кислоты'/>)
        else return <></>
    }

    const post = (e) => {
        e.preventDefault();
        console.log(e)
        let formData = new FormData();
        formData.append('type', e.target[0].value);
        formData.append('date', e.target[1].value);
        formData.append('victims', e.target[2].value);
        formData.append(`${e.target[3].id}`, e.target[3].value);
        fetch(
            "https://demo-api.vsdev.space/api/elonus/events",
            {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                },
                body: formData
            },
        )

    }

    return (
        <form onSubmit={(e) => post(e)}>
            <select onChange={(e) => setCond(e.target.value)}>
                <option value="acid_rain">Кислотный дождь</option>
                <option value="hurricane">Ураган</option>
                <option value="earthquake">Землетрясение</option>
            </select>
            <input placeholder="Дата события"/>
            <input placeholder="Марсиан пострадало"/>
            <Zxc/>
            <button type='submit'>SEND</button>
        </form>
    )
}
export default Form;