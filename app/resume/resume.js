'use client'
import React from 'react';
import { useState } from 'react';

const Myresume = () => {
    const [pdfUrl] = useState('https://drive.google.com/file/d/1nb4uVV8NDuStjwUTlEvjR7OziyaP9RsR/view');

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };
  return (
    
    <div id="recent" class="mt-3">

        <h2 class="text-xl font-semibold">Accomplishments</h2>
        <hr/>
        <hr/>
        <br></br> 
        <div>
            <p>
            I have successfully earned my Bachelor`&apos`s degree in Computer Science and Engineering and am currently engaged in research work under the guidance of my undergraduate supervisor, Mr.Mr. <span class="text-orange-600 hover:text-orange-400"><a href="https://shahariar-shibli.github.io/" target="_blank">G. M. Shahariar Shibli</a></span>, faculty of the <span class="text-orange-600 hover:text-orange-400"><a href="https://www.aust.edu/cse" target="_blank">Department of Computer Science and Engineering</a></span> of Ahsanullah University of Science and Technology.
            </p>
        </div>
        <br></br>    
        <hr/>
        <br></br> 

        <h2 class="text-xl font-semibold">RESUME</h2>
        <hr/>
        <hr/>
        <div>
            <embed src={pdfUrl} width="100%" height="600px" type="application/pdf" />
            <button onClick={handleDownload}>Download PDF</button>
        </div>
        <hr/>

    </div>

  );
};

export default Myresume;
