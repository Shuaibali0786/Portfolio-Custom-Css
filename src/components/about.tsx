import React from 'react'
import Image from 'next/image'



const About = () => {
  return (
    
      <div id="about">

<h1>About</h1>

<div className="wrapper">

<div className="image">
          <Image
            src="/pic2.jpg" 
            alt="My profile picture"
            width={300} 
            height={300} 
          />
        </div>

<div className="content">
    <h3>My Name Is Shuaib</h3>
    <p>I am student at GIAIC, pursuing a course in Artificial Intelligence Web 3.0,  & Metaverse, Passionate about technology and and constantily learning new skills to stay up-to-date with the latest innovations.</p>
  
    <a href="#"><button>download resume</button></a>
</div>

</div>

</div>

    
  )
}

export default About
