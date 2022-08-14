import React from 'react';
import useGetResidentAxios from '../../assets/hooks/useGetResidentAxios';
import { getIcon } from '../../assets/js/getIconStatus';


const WikiCard = ({ URI }) => {
    const resident = {
        name: '-',
        gender: '-',
        status: '-',
        iconStatus: getIcon('Uknow'),
        image: getIcon('Unknown'),
        species: '-',
        type: '-',
    
    
    }
    const queryResident = useGetResidentAxios(URI);

    if (queryResident) {
        resident.name = queryResident.name || '-';
        resident.gender = queryResident.gender || '-';
        resident.status = queryResident.status || '-';
        resident.iconStatus = getIcon(queryResident.status);
        resident.image = queryResident.image || getIcon('Unknown');
        resident.species = queryResident.species || '-';
        resident.type = queryResident.type || '-';

    }
    return (
        <div className="card">
            <div className='wiki-status'>
                <strong>{resident.status}</strong>
                <img src={resident.iconStatus} />
            </div>
            <div className='img-resident'>
                <img src={resident.image} className="card-img-top" />
            </div>

            <div className="card-body">
                <h5 className="card-title"><strong> {resident.name}</strong></h5>
                <hr />
            </div>
            <div className="card-body">
                <small>Gender</small>
                <h5>{resident.gender}</h5>

                <small>Type</small>
                <h5>{resident.type}</h5>

                <small>Species</small>
                <h5>{resident.species}</h5>
            </div>
        </div>
    )
}

export default WikiCard