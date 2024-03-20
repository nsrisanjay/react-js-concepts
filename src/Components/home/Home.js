import React from 'react'
import x from '../../../src/img.jpeg'
function Home() {
  return (
    <div>
      <h2 className="display-4 text-center text-primary m-2">WELCOME TO OUR WEBSITE!</h2>
      <img src={x} width='400px' className='d-block mx-auto' alt="" />
      <br />
      <p className="lead dipslay-5 w-50 text-center d-block mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea nihil eius repudiandae, aspernatur architecto quas deleniti aliquam blanditiis nulla incidunt nobis minus at molestiae, quam possimus nam, iure odio.</p>
    </div>
  )
}

export default Home