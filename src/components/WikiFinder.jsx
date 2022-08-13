import React, { useState } from 'react';
import { getIcon } from '../assets/js/getIconStatus';
import WikiCard from './subcompwikifind/WikiCard';
import WikiInfo from './subcompwikifind/WikiInfo';
import useAxios from '../assets/hooks/useAxios';

const locationID = Math.floor(Math.random() * 126);

const URILocations = 'https://rickandmortyapi.com/api/location';

const URILoc = `https://rickandmortyapi.com/api/location/${locationID}`;

const singleLocation = {
    Id: '',
    name: 'aa',
    type: '',
    dimension: '',
    residents: [],
    population: ''
}

const WikiFinder = () => {
    const locations = useAxios(URILoc);
    const [word, setWord] = useState(singleLocation);

   

    if(locations){

        singleLocation.Id = locations.id;
        singleLocation.name = locations.name;
        singleLocation.type = locations.type;
        singleLocation.dimension = locations.dimension;

        //setWord(locations)

    }

    console.log(singleLocation);





    return (
        <div className='container wiki-finder-main'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control form-control-lg text-success' placeholder='Write location name' />
                        <button className='btn btn-success btn-lg btn-finder' type='botton'>Search...</button>
                    </div>
                </div>

                <WikiInfo dataInfo={word}/>


                <div className='col-md-12 col-sm-12 col-xs-12'>

                    <div className='wiki-card-content'>

                        <WikiCard icon={getIcon('Dead')} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WikiFinder