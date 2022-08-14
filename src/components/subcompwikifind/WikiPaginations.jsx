import React from 'react'

const WikiPaginations = ({ cardPerPage, totalCards, paginate, locationName }) => {
  const pageNumbers = [];
  for (let i = 2; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  if (totalCards <= 0) {
    return (
      <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-pagination'>
        <div className='container text-center'>
          <ul className='list-paginations'>
           
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-pagination'>
      <div className='container text-center'>
        <ul className='list-paginations'>
          <li onClick={paginate} key={1 + locationName} className='numb active'>{1}</li>
          {
            pageNumbers.map((numb) => <li onClick={paginate} key={numb + locationName} className='numb'>{numb}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default WikiPaginations