'use client'
import React from 'react';

const Myresume = () => {
    const resumeUrl = 'Resume of Tonmoy Talukder.pdf';
    const pdfUrl = 'Curriculum-Vitae-of-Tonmoy-Talukder.pdf';
    // const pdfUrl = 'https://github.com/AuthoredByTonmoy/resume/blob/main/Resume_of_Tonmoy_Talukder.pdf';
    // const pdfUrl = 'https://drive.google.com/file/d/1auLsN9sgf4BrtH0NlQ9IjbYQNFHPi5U6/view';

    const handleDownload = () => {
        window.open(pdfUrl, '_blank');
    };
    const handleDownloadResume = () => {
        window.open(resumeUrl, '_blank');
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

        <h2 class="text-xl font-semibold">Curriculum Vitae</h2>
        <hr/>
        <hr/>
        <div>
            <br></br>
            <button onClick={handleDownload} class="download-button">⬇️ Download My Curriculum Vitae</button>
            <br></br>
            <br></br>
            {/* <iframe src={pdfUrl} width="100%" height="600px" /> */}

            {/* <object width="100%" height="800px" data={pdfUrl} type="application/pdf" style={{overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none'}} /> */}

            {/* <iframe id="pdfviewer" src="https://github.com/AuthoredByTonmoy/CV-and-Resume/blob/69452dad9e6e8be5e30fd9d2b880bf298450b838/Curriculum-Vitae-of-Tonmoy-Talukder.pdf" frameborder="0" width="100%" height="800px"></iframe> */}

            {/* <iframe src="http://docs.google.com/gview?embedded=true&url=https://github.com/AuthoredByTonmoy/CV-and-Resume/blob/69452dad9e6e8be5e30fd9d2b880bf298450b838/Curriculum-Vitae-of-Tonmoy-Talukder.pdf" frameborder="0" width="100%" height="800px"></iframe> */}

            <iframe src="https://drive.google.com/file/d/1auLsN9sgf4BrtH0NlQ9IjbYQNFHPi5U6/preview" frameborder="0" width="100%" height="800px" style={{overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none'}}></iframe>


            <br></br>
            <button onClick={handleDownloadResume} class="download-button">⬇️ Download My Resume</button>
            <br></br>
            <br></br>

        </div>
        <hr/>

    </div>

  );
};

export default Myresume;
