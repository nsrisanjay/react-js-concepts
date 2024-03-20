import React from 'react'
import x from '../../../src/img.jpeg'
function Reactjs() {
  return (
    <div>
      <h3 className="display-4 text-center m-3 text-info">
        REACT-JS
      </h3>
      <p className='lead  text-center'>It is a very famous library of JavaScript</p>
      <p className="lead text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem consequuntur temporibus esse rerum hic consequatur veritatis quae labore at ad in exercitationem rem sequi tempore non laborum dolorem, repellat iusto laboriosam nulla, odio vero distinctio tempora? Delectus labore culpa ratione?</p>
      <img src={x} alt="" width='350px' className='d-block mx-auto'/>
    </div>
  )
}

export default Reactjs