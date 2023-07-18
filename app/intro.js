import React from 'react';
import Image from 'next/image'

const Intro = () => {
  return (
    // <div style={{margin: '2rem'}}>
    //   <h2 className="text-lg font-semibold">Tonmoy Talukder</h2>
      
    //   <p>This is the content of the first column.</p>
    // </div>
    <div className="container mx-auto flex justify-center">
  <div className="w-full md:w-50">
      <div className="bg-gray-200 rounded-md p-2">
        <p>&#34;Programming isn&#39;t about what you know, it&#39;s about what you can figure out.&#34;</p>
      <p className="text-right">—Chris Pine, Learn to Program</p>
      </div>
      <br></br>
    <div className="mt-2">
      <h1 className="text-2xl font-bold text-center">Tonmoy Talukder</h1> <br></br>
      {/* <Image src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg" className="h-60 w-60 rounded-full mx-auto" 
      width={800}
      height={500}
      alt="Image"/> */}
      <Image
        src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg"
        alt="Image"
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />
      <br></br>
      <p className="text-center">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <span className="text-center text-orange-700 hover:text-orange-400"><a href="https://drive.google.com/file/d/1WF1xDHIyE3c1oATPgM1ZpZMPhj0hAfUw/view" target="_blank">Curriculum Vitae</a></span> | <span className="text-center text-orange-700 hover:text-orange-400"><a href="https://www.linkedin.com/in/tonmoytalukder/" target="_blank">LinkedIn</a></span> | <span className="text-center text-orange-700 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder" target="_blank">GitHub</a></span> | <span className="text-center text-orange-700 hover:text-orange-400"><a href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&hl=en" target="_blank">Google Scholar</a></span>
      </p>
      <p className="text-justify">
      I have pursued Bachelor of Science degree in Computer Science and Engineering at <span className="text-orange-700 hover:text-orange-400"><a href="https://www.aust.edu/" target="_blank" rel="noreferrer">Ahsanullah University of Science and Technology</a></span>.
    <br></br>
    <br></br>
      I am currently doing research in Machine Learning under my undergrad supervisor Mr. <span className="text-orange-700 hover:text-orange-400"><a href="https://shahariar-shibli.github.io/" target="_blank" rel="noreferrer">G. M. Shahariar Shibli</a></span>, faculty of the <span className="text-orange-700 hover:text-orange-400"><a href="https://www.aust.edu/cse" target="_blank" rel="noreferrer">Department of Computer Science and Engineering</a></span> of Ahsanullah University of Science and Technology, focusing on Natural Language Processing, Computer Vision and Multimodal Deep Learning research.
      <br></br>
      <br></br>
      I have a keen interest in various research areas, including  <span className="text-sky-700 hover:text-orange-400">Multimodal Deep Learning</span>, <span className="text-sky-700 hover:text-orange-400">Natural Language Processing</span>, <span className="text-sky-700 hover:text-orange-400">Computer Vision</span>, <span className="text-sky-700 hover:text-orange-400">Human-Computer Interaction</span>, and <span className="text-sky-700 hover:text-orange-400">Machine Learning</span>.
      </p>
    </div>
    <hr/>
  <hr/>
  </div>
</div>

  );
};

export default Intro;
