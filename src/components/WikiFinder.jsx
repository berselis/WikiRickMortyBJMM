import WikiCard from './subcompwikifind/WikiCard';
import WikiInfo from './subcompwikifind/WikiInfo';
import axios from 'axios';
import useGetAllLocationAxios from '../assets/hooks/useGetAllLocationAxios';
import { useState, useEffect } from 'react';

import WikiCardNull from './subcompwikifind/WikiCardNull';
import WikiForm from './subcompwikifind/WikiForm';

const ramdomLocationID = Math.floor(Math.random() * 126);


let suggestions = []

let singleLocation = {
    name: '-',
    type: '-',
    dimension: '-',
    population: '-',
    residents: []
}

const WikiFinder = () => {
    suggestions = useGetAllLocationAxios();
    const [queryLocation, setQueryLocation] = useState();
    const [urlLocation, setUrlLocation] = useState(`https://rickandmortyapi.com/api/location/${ramdomLocationID}`);
    const findLocation = (e) => {
        e.preventDefault();

        const input = e.target.elements[0];
        if (input.value) {
            const locationObj = suggestions.find(fi => fi.name == input.value)
            if (locationObj) {
                setUrlLocation(`https://rickandmortyapi.com/api/location/${locationObj.id}`);
                input.value = null;
            }
        }
    }
    

    const [residentCards, setResidentCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage, setCardPerPage] = useState(3);

    useEffect(() => {
        axios.get(urlLocation)
            .then(res => {
                setQueryLocation(res.data);
                setResidentCards(res.data.residents);
            })
            .catch(error => console.log(error))
    }, [urlLocation]);

    if (queryLocation) {
        singleLocation.name = queryLocation.name || '-';
        singleLocation.type = queryLocation.type || '-';
        singleLocation.dimension = queryLocation.dimension || '-';
        singleLocation.population = queryLocation.residents.length;
        singleLocation.residents = [];
        if (queryLocation.residents.length > 0) {
            singleLocation.residents = queryLocation.residents;
        }
        
    }


    //Get current residentCard
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentResidentCards = residentCards.slice(indexOfFirstCard, indexOfLastCard);


    
    return (
        <div className='container wiki-finder-main'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                   <WikiForm findLocation={findLocation} suggestions={suggestions}/>
                </div>

                <WikiInfo dataInfo={singleLocation} />
                <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-pagination'>
                    <div className='container text-center'>

                        <ul className='list-paginations'>

                            <li className='numb'>1</li>
                            <li className='numb'>2</li>
                            <li className='numb active'>3</li>
                            <li className='numb'>4</li>
                            <li className='numb'>5</li>

                        </ul>



                    </div>

                </div>

                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className='wiki-card-content'>
                        {
                            currentResidentCards.length == 0 ? <WikiCardNull /> : currentResidentCards.map(resident => <WikiCard key={resident} URI={resident} />)
                        }
                    </div>
                </div>


                <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-footer'>
                    <div className='container text-center'></div>
                </div>
            </div>
        </div>

    )
}

export default WikiFinder