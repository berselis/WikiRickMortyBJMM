import WikiCard from './subcompwikifind/WikiCard';
import WikiInfo from './subcompwikifind/WikiInfo';
import axios from 'axios';
import useGetAllLocationAxios from '../assets/hooks/useGetAllLocationAxios';
import { useState, useEffect } from 'react';



const ramdomLocationID = Math.floor(Math.random() * 126);


let SUGGEST = []

let singleLocation = {
    name: '-',
    type: '-',
    dimension: '-',
    population: '-',
    residents: []
}

const WikiFinder = () => {
    const [queryLocation, setQueryLocation] = useState();
    const [urlLocation, setUrlLocation] = useState(`https://rickandmortyapi.com/api/location/${ramdomLocationID}`);
    const findLocation = (e) => {
        e.preventDefault();

        const input = e.target.elements[0];
        if (input.value) {
            const locationObj = SUGGEST.find(fi => fi.name == input.value)
            if (locationObj) {
                setUrlLocation(`https://rickandmortyapi.com/api/location/${locationObj.id}`);
                input.value = null;

            }
        }



    }

    useEffect(() => {
        axios.get(urlLocation)
            .then(res => setQueryLocation(res.data))
            .catch(error => console.log(error))
    }, [urlLocation]);



    if (queryLocation) {
        singleLocation.name = queryLocation.name || '-';
        singleLocation.type = queryLocation.type || '-';
        singleLocation.dimension = queryLocation.dimension || '-';
        singleLocation.population = queryLocation.residents.length;
        if (queryLocation.residents.length > 0) singleLocation.residents = queryLocation.residents
    }


    SUGGEST = useGetAllLocationAxios();

    return (
        <div className='container wiki-finder-main'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>

                    <form onSubmit={findLocation} className='input-group mb-3'>
                        <input list='locationNames' type='text' className='form-control form-control-lg text-success' placeholder='Write location name' />
                        <button className='btn btn-success btn-lg btn-finder' type='botton'>Search...</button>
                        <datalist id='locationNames'>
                            {
                                SUGGEST.map(su => {
                                    return <option key={su.url} value={`${su.name}`} />
                                })
                            }

                        </datalist>
                    </form>
                </div>

                <WikiInfo dataInfo={singleLocation} />

                <div className='col-md-12 col-sm-12 col-xs-12'>

                    <div className='wiki-card-content'>
                        {
                            singleLocation.residents.map(resident => {
                                return <WikiCard key={resident} URI={resident} />
                            })
                        }

                    </div>
                </div>


                <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-footer'>
                    <div className='container text-center'>
                        
                        
                    </div>
                </div>


            </div>
        </div>

    )
}

export default WikiFinder