import React from 'react'

const WikiCard = ({icon}) => {
    return (
        <div className="card">
            <div className='wiki-status'>
                <strong>Dead</strong>
                <img src={icon} />
            </div>
            <img src="https://rickandmortyapi.com/api/character/avatar/69.jpeg" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"><strong> Commander Rick</strong></h5>
                <hr />
            </div>
            <div className="card-body">
                <small>Last known location:</small>
                <h5>Citadel of Ricks</h5>

                <small>First seen in:</small>
                <h5>The Rickshank Rickdemption</h5>
            </div>
        </div>
    )
}

export default WikiCard