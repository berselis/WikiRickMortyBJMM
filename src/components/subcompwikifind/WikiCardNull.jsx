import React from 'react';
import { getIcon } from '../../assets/js/getIconStatus';


const WikiCardNull = () => {
    const resident = {
        name: '-',
        gender: '-',
        status: '-',
        iconStatus: getIcon('Uknow'),
        image: getIcon('Unknown'),
        species: '-',
        type: '-',
    
    
    }
    return (
        <div className="card card-in">
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

export default WikiCardNull