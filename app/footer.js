import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaBlogger, FaTwitter, FaMedium, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    
    <div class="container">
    <div style={{paddingLeft: "5.25rem"}} class="mt-5 py-7 text-left grid grid-cols-12 gap-4">
    <div class="col-span-6">  

    <h2 class="text-xl font-semibold">Find Me: 👉</h2>
        <ul>
            <li className="social-icon">
                <div className="social-icon">
                    <FaGithub className="github-icon" />
                    <span className="social-name text-orange-600 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder" target="_blank">GitHub</a></span>
                </div>
            </li>
            <li className="social-icon">
                <div className="social-icon">
                    <FaLinkedin className="linkedin-icon" />
                    <span className="social-name text-orange-600 hover:text-orange-400"><a href="https://www.linkedin.com/in/tonmoytalukder/" target="_blank">LinkedIn</a></span>
                </div>
            </li>
            <li  className="social-icon">
                <div className="social-icon">
                    {/* <FaHuggingFace className="huggingface-icon" /> */}
                    <Image src="/icons/huggingface.svg" alt="Hugging Face" width={24} height={24} />&nbsp;
                    <span className="social-name text-orange-600 hover:text-orange-400"><a href="https://huggingface.co/tonmoytalukder" target="_blank">HuggingFace</a></span>
                </div>
            </li>
            <li  className="social-icon">
                <div className="social-icon">
                    <FaTwitter className="twitter-icon" />
                    <span className="social-name text-orange-600 hover:text-orange-400"><a href="https://twitter.com/TonmoyTweets" target="_blank">Twitter</a></span>
                </div>
            </li>

        </ul>

        </div> 

        <div style={{paddingRight: "5.25rem"}} class="col-span-6 text-special">
            <h2 class="text-xl font-semibold">I write in: 🖊️</h2>
            <ul class="text-right">
            <li class="social-icons-wrapper2">
            <div className="social-icon">
                <FaBlogger className="blogger-icon" />
                <span className="social-name"><span className="social-name text-orange-600 hover:text-orange-400"><a href="https://tonmoytalukder.blogspot.com/" target="_blank">Blogger</a></span></span>
            </div>
            </li>
            <li class="social-icons-wrapper2">
            <div className="social-icon">
                <FaMedium className="medium-icon" />
                <span className="social-name"><span className="social-name text-orange-600 hover:text-orange-400"><a href="https://tonmoytalukder.medium.com/" target="_blank">Medium</a></span></span>
            </div>
            </li>
        </ul>
        <br></br>
        <h2 class="text-xl font-semibold">Write me: ✍️</h2>
        <div className="social-icons-wrapper2">
            <div className="social-icon">
                <FaEnvelope className="mail-icon" />
                <span className="social-name"><span className="social-name text-orange-600 hover:text-orange-400"><a href="mailto:tonmoytalukder.cs@gmail.com" target="_blank">Write E-Mail</a></span></span>
      </div>
        <div/>
    </div>
        </div>

        </div>

        <p style={{paddingLeft: "5.25rem"}} class="text-left">&copy; {currentYear}, Tonmoy Talukder. All rights reserved.</p>
        <br></br>
        <br></br>

        {/* <p>&copy; <script>document.write(new Date().getFullYear());</script>, Tonmoy Talukder reserves all copyrights. </p> */}

    </div>

  );
};

export default Footer;
