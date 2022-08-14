import React from 'react'

const WikiPaginations = ({ cardPerPage, totalCards, paginate }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <div className='col-md-12 col-sm-12 col-xs-12 wiki-data-pagination'>
      <div className='container text-center'>
        <ul className='list-paginations'>
          {
            pageNumbers.map((numb) => {
              return <li onClick={paginate} key={numb} className='numb'>{numb}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default WikiPaginations