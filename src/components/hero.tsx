import React from 'react';
import Image from 'next/image';
import { FaYoutube , FaTwitter, FaInstagram,  FaGithub, FaLinkedin, FaTiktok} from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="home">
     
      <div className="home-image">
        <Image 
          src="/about-pic.jpg" 
          alt="About Picture" 
          width={500} 
          height={500} 
          className="profile-image"
        />
      </div>

     
      <div className="home-content">
        <h1>Hi, I'm Shuaib</h1>
        <h3>Frontend Developer</h3>
        <p>I am student at GIAIC, pursuing a course in Artificial Intelligence Web 3.0, & <br />                                         Metaverse, Passionate about technology and and constantily learning new skills to stay up-to-date with the latest innovations.</p>
        

       
        <div className="home-sci">
        <Link href="https://www.linkedin.com/in/shuaib-ali-248a262b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">< FaLinkedin className='w-6 h-6 rounded-full bg-blue-800 text-white pt-1 pb-1'/></Link>   
            <Link href="https://github.com/Shuaibali0786?tab=repositories"><FaGithub className='w-6 h-6 rounded-full bg-red-600 text-white pt-1 pb-1'/></Link>
            <Link href="#">< FaTwitter className='w-6 h-6 rounded-full bg-blue-400 text-white pt-1 pb-1'/></Link>
            <Link href="#"><FaInstagram  className=' instagrame w-6 h-6 rounded-full  text-white pt-1 pb-1'/></Link>
            <Link href="#">< FaTiktok className='w-6 h-6 rounded-full bg-black text-white pt-1 pb-1'/></Link>
          


        </div>

       
        <a href="#" className="btn">Download CV</a>
      </div>
    </div>
  );
};

export default Hero;
