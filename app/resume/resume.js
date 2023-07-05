'use client'
import React from 'react';

const Myresume = () => {
    const pdfUrl = 'Resume of Tonmoy Talukder.pdf';
    // const pdfUrl = 'https://drive.google.com/file/d/1nb4uVV8NDuStjwUTlEvjR7OziyaP9RsR/view';

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };
  return (
    
    <div id="resume" class="mt-3">

        <h2 class="text-xl font-semibold">Professional Statement</h2>
        <hr/>
        <hr/>
        <br></br> 
        <div>
            <p class="text-justify">
            I am a driven individual seeking opportunities in machine learning and data science, aiming to utilize my programming and analytical skills for impactful research. Resourceful, creative, and adaptable, I thrive in dynamic environments. With a passion for technology and problem-solving, I am eager to contribute to collaborative projects and continuously expand my knowledge. Quick to learn, I am dedicated to advancing professionally in the vast field of machine learning. Committed to innovation and growth, I bring a strong foundation in theory and practice. I am excited to connect and contribute to making a difference in the world of machine learning and data science.
            </p>
        </div>
        <br></br>    
        <hr/>
        <br></br> 

        <h2 class="text-xl font-semibold">RESUME</h2>
        <hr/>
        <hr/>
        <div>
            <br></br>
            <button onClick={handleDownload} class="download-button">⬇️ Download My Resume</button>
            <br></br>
            <br></br>
            <iframe src={pdfUrl} width="100%" height="600px" />

        </div>
        <hr/>

    </div>

  );
};

export default Myresume;
