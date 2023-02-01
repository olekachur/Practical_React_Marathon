import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Starships() {
    const [data, setData] = useState([]);
    const [dataImg, setDataImg] = useState('');
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}/`)
            .then(res => {
                setData(res.data);
                setDataImg(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
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
        <div className='data_card'>
            <img
                src={dataImg}
                className='data_card_img'
                alt="starship_image"
                onError={handleImgError}
            />
            <h3 className='data_card_name'>{`${data.name}`}</h3>
            <ul className='data_card_list'>
                <li className='data_card_list_item'>{`Model: ${data.model}`}</li>
                <li className='data_card_list_item'>{`Manufactures: ${data.manufacturer}`}</li>
                <li className='data_card_list_item'>{`Price: ${data.cost_in_credits}`}</li>
                <li className='data_card_list_item'>{`Length: ${data.length}`}</li>
                <li className='data_card_list_item'>{`Passangers: ${data.passengers}`}</li>
            </ul>
            <button className='data_card_btn' onClick={handleNextItem}>NEXT</button>
        </div>
    );
}
