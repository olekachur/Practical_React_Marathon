import { useState, useEffect } from 'react';
import axios from 'axios';

export default function People() {
    const [data, setData] = useState([]);
    const [dataImg, setDataImg] = useState('');
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(res => {
                setData(res.data);
                setDataImg(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`)
                setLoading(false);
            })
            .catch(err => {
                if (err.response.status === 404) {
                    setId(id + 1);
                }
            })
    }, [id])

    const handleNextItem = () => {
        const nextItemId = +data.url.split('/')[5] + 1;
        setId(nextItemId);
    }

    const handleImgError = (e) => {
        e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
    }

    if (loading) {
        return <h1 className='loading'>Loading...</h1>
    }
    return (
        <div className='data_card' >
            <img
                className='data_card_img'
                src={dataImg}
                alt="person_image"
                onError={handleImgError}
            />
            <h3 className='data_card_name' >{`${data.name}`}</h3>
            <ul className='data_card_list'>
                <li className='data_card_list_item'>{`Gender: ${data.gender}`}</li>
                <li className='data_card_list_item'>{`Birth Year: ${data.birth_year}`}</li>
                <li className='data_card_list_item'>{`Eye color: ${data.eye_color}`}</li>
            </ul>
            <button className='data_card_btn' onClick={handleNextItem}>NEXT</button>
        </div>

    )
}
