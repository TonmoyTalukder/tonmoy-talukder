import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    
    <div style={{paddingLeft: "5.25rem"}} class="mt-5 py-10 px-20 text-left">

    <h2 class="text-xl font-semibold">Follow Me: 👉</h2>
        <ul>
            <li class="text-orange-600 hover:text-orange-400">
                <a href="https://github.com/TonmoyTalukder" target="_blank">GitHub</a>
            </li>
            <li class="text-orange-600 hover:text-orange-400">
                <a href="https://www.linkedin.com/in/tonmoytalukder/" target="_blank">LinkedIn</a>
            </li>
            <li>
               <span class="text-orange-600 hover:text-orange-400"><a href="https://huggingface.co/tonmoytalukder" target="_blank">HuggingFace</a></span>
            </li>

        </ul>

        <br></br>
        
        <p class="text-left">&copy; {currentYear}, Tonmoy Talukder. All rights reserved.</p>

        {/* <p>&copy; <script>document.write(new Date().getFullYear());</script>, Tonmoy Talukder reserves all copyrights. </p> */}

    </div>

  );
};

export default Footer;
