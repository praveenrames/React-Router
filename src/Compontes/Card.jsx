import React from 'react'

function Card({cardData}) {
    let data=cardData;
  return (
   <div className="col-lg-4 col-sm-6 mb-4" id='card'><br/>
    <div className="card h-100">
     <a href="#"><img src={` ${data.img} `} className="card-img-top" alt="img" width='333px' height='200px'/></a>
      <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.di}</p>
      <div className='crd-footer'>
      <p className="card-text"><small className="text-body-secondary">{data.date}</small></p>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Card