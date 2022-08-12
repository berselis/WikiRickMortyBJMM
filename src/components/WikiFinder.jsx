import React from 'react';
import { getIcon } from '../assets/js/getIconStatus';



const WikiFinder = () => {
    return (
        <div className='container wiki-finder-main'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control form-control-lg text-success' placeholder='Write location name' />
                        <button className='btn btn-success btn-lg btn-finder' type='botton'>Search...</button>
                    </div>
                </div>
                <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-location'>
                    <div className='container text-center'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                            <div className='col'>
                                <h2><strong>Name</strong></h2>
                                <h3>---</h3>
                            </div>
                            <div className='col'>
                                <h2><strong>Type</strong></h2>
                                <h3>---</h3>
                            </div>
                            <div className='col'>
                                <h2><strong>Dimension</strong></h2>
                                <h3>---</h3>
                            </div>
                            <div className='col'>
                                <h2><strong>Population</strong></h2>
                                <h3>---</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 col-sm-12 col-xs-12'>

                    <div className='wiki-card-content'>

                        <div className="card">
                            <div className='wiki-status'>
                                <strong>Dead</strong>
                                <img src={getIcon('Dead')} />
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


                    </div>





                </div>
            </div>
        </div>
    )
}

export default WikiFinder