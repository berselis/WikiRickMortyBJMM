import WikiCard from './subcompwikifind/WikiCard';
import WikiInfo from './subcompwikifind/WikiInfo';
import WikiCardNull from './subcompwikifind/WikiCardNull';
import WikiForm from './subcompwikifind/WikiForm';
import WikiPaginations from './subcompwikifind/WikiPaginations';
import WikiFooter from './subcompwikifind/WikiFooter';

import axios from 'axios';
import useGetAllLocationAxios from '../assets/hooks/useGetAllLocationAxios';
import { useState, useEffect } from 'react';

const WikiFinder = () => {
    const ramdomLocationID = Math.floor(Math.random() * 126);
    let suggestions = []

    let singleLocation = {
        name: '-',
        type: '-',
        dimension: '-',
        population: '-',
        residents: []
    }
    suggestions = useGetAllLocationAxios();
    const [queryLocation, setQueryLocation] = useState();
    const [urlLocation, setUrlLocation] = useState(`https://rickandmortyapi.com/api/location/${ramdomLocationID}`);
    const [residentCards, setResidentCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage] = useState(4);
    const [loctionName, setLocationName] = useState();

    const findLocation = (e) => {
        e.preventDefault();

        const input = e.target.elements[0];
        if (input.value) {
            const locationObj = suggestions.find(fi => fi.name == input.value)
            if (locationObj) {
                setUrlLocation(`https://rickandmortyapi.com/api/location/${locationObj.id}`);
                setLocationName(input.value);
                setCurrentPage(1);
                input.value = null;
            }
        }
    }

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

    //Change page
    const paginate = (e) => {
        [...e.target.parentElement.childNodes].forEach(li => {
            li.className = 'numb';
        });
        e.target.className = 'numb active';
        setCurrentPage(parseInt(e.target.innerText));
    }


    return (
        <div className='container wiki-finder-main'>
            <div className='row'>
                <WikiForm findLocation={findLocation} suggestions={suggestions} />

                <WikiInfo dataInfo={singleLocation} />

                <WikiPaginations cardPerPage={cardPerPage} totalCards={residentCards.length} paginate={paginate} locationName={loctionName} />

                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className='wiki-card-content'>
                        {
                            currentResidentCards.length == 0 ? <WikiCardNull /> : currentResidentCards.map(resident => <WikiCard key={resident} URI={resident} />)
                        }
                    </div>
                </div>

                <WikiFooter />
            </div>
        </div>

    )
}

export default WikiFinder