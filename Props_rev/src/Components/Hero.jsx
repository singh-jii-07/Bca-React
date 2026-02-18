import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam eius ipsam officiis dolor eveniet quis, quae dicta blanditiis voluptatem voluptas quaerat velit debitis dolore odio dignissimos ipsa. At, aperiam aut.</p>
      <div className='flex'>
      <Button name={"hello"}/>
      <Button name={"nice"}/>
      </div>
    </div>
  )
}

export default Hero
