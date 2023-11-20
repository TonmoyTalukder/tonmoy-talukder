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
                    <span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="https://github.com/TonmoyTalukder" target="_blank" rel="noreferrer">GitHub</a></span>
                </div>
            </li>
            <li className="social-icon">
                <div className="social-icon">
                    <FaLinkedin className="linkedin-icon" />
                    <span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="https://www.linkedin.com/in/tonmoytalukder/" target="_blank" rel="noreferrer">LinkedIn</a></span>
                </div>
            </li>
            <li  className="social-icon">
                <div className="social-icon">
                    {/* <FaHuggingFace className="huggingface-icon" /> */}
                    <Image src="/icons/huggingface.svg" alt="Hugging Face" width={24} height={24} />&nbsp;
                    <span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="https://huggingface.co/tonmoytalukder" target="_blank" rel="noreferrer">HuggingFace</a></span>
                </div>
            </li>
            <li  className="social-icon">
                <div className="social-icon">
                    {/* <FaTwitter className="twitter-icon" /> */}
                    <span style={{paddingLeft: '8%'}}><a href="https://commons.wikimedia.org/wiki/File:X_logo_2023.svg#/media/File:X_logo_2023.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X logo 2023.svg" height="20" width="20"></img></a></span>&nbsp;&nbsp;
                    <span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="https://twitter.com/TonmoyTalukder_" target="_blank" rel="noreferrer">X</a></span>
                </div>
            </li>
        </ul>
        <br></br>
        </div>  

        {/* <div className='col-span-4 flex justify-center'>
        <iframe scrolling="no" frameborder="0" allowtransparency="true" width="150" height="150" src="//rf.revolvermaps.com/w/6/a/a2.php?i=5b7vr82xdt7&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=verdana&amp;l=0"></iframe>
        </div> */}

        <div style={{paddingRight: "5.25rem"}} class="col-span-6 text-special">
            <h2 class="text-xl font-semibold">I write in: 🖊️</h2>
            <ul class="text-right">
            <li class="social-icons-wrapper2">
            <div className="social-icon">
                <FaBlogger className="blogger-icon" />
                <span className="social-name"><span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="https://tonmoytalukder.blogspot.com/" target="_blank" rel="noreferrer">Blogger</a></span></span>
            </div>
            </li>
            <li class="social-icons-wrapper2">
            <div className="social-icon">
                <FaMedium className="medium-icon" />
                <span className="social-name"><span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="https://tonmoytalukder.medium.com/" target="_blank" rel="noreferrer">Medium</a></span></span>
            </div>
            </li>
        </ul>
        <br></br>
        <h2 class="text-xl font-semibold">Write me: ✍️</h2>
        <div className="social-icons-wrapper2">
            <div className="social-icon">
                <FaEnvelope className="mail-icon" />
                <span className="social-name"><span className="social-name text-orange-700 hover:text-orange-400 hover:underline"><a href="mailto:tonmoytalukder.cs@gmail.com" target="_blank" rel="noreferrer">Write E-Mail</a></span></span>
      </div>
        <div/>
    </div>
        </div>

        </div>
        <div style={{paddingLeft: "5.25rem", marginTop: "-3%"}} className='font-medium text-left'><strong>Last update</strong>: September, 2023</div>

        <div style={{paddingLeft: "5.25rem"}} class="text-left">
            <br></br>
            <span>&copy; {currentYear}, Tonmoy Talukder. All rights reserved.</span><br></br>
            <span class="font-sans text-xs subpixel-antialiased text-slate-500">This site has been developed by myself using NEXT.JS.</span>
        </div>
        <br></br>
        <br></br>

        {/* <p>&copy; <script>document.write(new Date().getFullYear());</script>, Tonmoy Talukder reserves all copyrights. </p> */}

    </div>

  );
};

export default Footer;
