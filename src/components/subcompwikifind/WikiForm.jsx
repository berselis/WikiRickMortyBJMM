import React from 'react'

const WikiForm = ({ findLocation, suggestions }) => {
    return (
        <div className='col-md-12 col-sm-12 col-xs-12'>
            <form onSubmit={findLocation} className='input-group mb-3'>
                <input list='locationNames' type='text' className='form-control form-control-lg text-success' placeholder='Write location name' />
                <button className='btn btn-success btn-lg btn-finder' type='botton'>Search...</button>
                <datalist id='locationNames'>
                    {
                        suggestions.map(su => {
                            return <option key={su.url} value={`${su.name}`} />
                        })
                    }
                </datalist>
            </form>
        </div>
    )
}

export default WikiForm