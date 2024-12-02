
import Link from "next/link";
import {FaTwitter, FaInstagram,  FaGithub, FaLinkedin, FaTiktok} from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      <>
        <section id="section-wrapper">
          <div className="box-wrapper">
         
            <div className="info-wrap">
              <h2 className="info-title">Contact Information</h2>
              <h3 className="info-sub-title">
              Drop me a line , give me a call, or send me a message by submitting the form.
              </h3>
              <ul className="info-details">
                <li>
                 
                  <span>Phone:</span> <a href="tel:+1235235598">+00000 000000 </a>
                </li>
                <li>
           
                  <span>Email:</span>{' '}
                  <a href="mailto:shuaibalibat@gmail.com">shuaibalibat@gmail.com</a>
                </li>
                <li>
             
                  <span>Website:</span> <a href="#">yoursite.com</a>
                </li>
              </ul>



              <div className="home-sci">
        <Link href="https://www.linkedin.com/in/shuaib-ali-248a262b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">< FaLinkedin className='w-6 h-6 rounded-full bg-blue-800 text-white pt-1 pb-1'/></Link>   
            <Link href="https://github.com/Shuaibali0786?tab=repositories"><FaGithub className='w-6 h-6 rounded-full bg-red-600 text-white pt-1 pb-1'/></Link>
            <Link href="#">< FaTwitter className='w-6 h-6 rounded-full bg-blue-400 text-white pt-1 pb-1'/></Link>
            <Link href="#"><FaInstagram  className=' instagrame w-6 h-6 rounded-full  text-white pt-1 pb-1'/></Link>
            <Link href="#">< FaTiktok className='w-6 h-6 rounded-full bg-black text-white pt-1 pb-1'/></Link>
          
        </div>
            </div>
            {/* Contact Form */}
            <div className="form-wrap">
              <form action="#" method="POST">
                <h2 className="form-title">Contact Us Me</h2>
                <div className="form-fields">
                  <div className="form-group">
                    <input
                      type="text"
                      className="fname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="lname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="email"
                      placeholder="Mail"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="phone"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  className="submit-button"
                />
              </form>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Contact;
