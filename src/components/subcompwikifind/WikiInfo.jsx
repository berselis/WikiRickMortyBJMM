import React from 'react'

const WikiInfo = ({dataInfo}) => {
    const {name, type, dimension, population} = dataInfo;


    return (
        <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-location'>
            <div className='container text-center'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                    <div className='col col-show-data'>
                        <h4><strong>Name</strong></h4>
                        <h5>{name}</h5>
                    </div>
                    <div className='col col-show-data'>
                        <h4><strong>Type</strong></h4>
                        <h5>{type}</h5>
                    </div>
                    <div className='col col-show-data'>
                        <h4><strong>Dimension</strong></h4>
                        <h5>{dimension}</h5>
                    </div>
                    <div className='col col-show-data'>
                        <h4><strong>Population</strong></h4>
                        <h5>{population}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WikiInfo