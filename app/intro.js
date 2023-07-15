import React from 'react';
import Image from 'next/image'

const Intro = () => {
  return (
    // <div style={{margin: '2rem'}}>
    //   <h2 class="text-lg font-semibold">Tonmoy Talukder</h2>
      
    //   <p>This is the content of the first column.</p>
    // </div>
    <div class="container mx-auto flex justify-center">
  <div class="w-full md:w-50">
      <div class="bg-gray-200 rounded-md p-2">
        <p>&#34;Programming isn&#39;t about what you know, it&#39;s about what you can figure out.&#34;</p>
      <p class="text-right">—Chris Pine, Learn to Program</p>
      </div>
      <br></br>
    <div class="mt-2">
      <h1 class="text-2xl font-bold text-center">Tonmoy Talukder</h1> <br></br>
      {/* <Image src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg" class="h-60 w-60 rounded-full mx-auto" 
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
      <p class="text-center">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <span class="text-center text-orange-700 hover:text-orange-400"><a href="https://drive.google.com/file/d/1auLsN9sgf4BrtH0NlQ9IjbYQNFHPi5U6/view" target="_blank">Curriculum Vitae</a></span> | <span class="text-center text-orange-700 hover:text-orange-400"><a href="https://www.linkedin.com/in/tonmoytalukder/" target="_blank">LinkedIn</a></span> | <span class="text-center text-orange-700 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder" target="_blank">GitHub</a></span> | <span class="text-center text-orange-700 hover:text-orange-400"><a href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&hl=en" target="_blank">Google Scholar</a></span>
      </p>
      <p class="text-justify">
      I have pursued Bachelor of Science degree in Computer Science and Engineering at <span class="text-orange-700 hover:text-orange-400"><a href="https://www.aust.edu/" target="_blank" rel="noreferrer">Ahsanullah University of Science and Technology</a></span>.
    <br></br>
    <br></br>
      I am currently doing research in Machine Learning under my undergrad supervisor Mr. <span class="text-orange-700 hover:text-orange-400"><a href="https://shahariar-shibli.github.io/" target="_blank" rel="noreferrer">G. M. Shahariar Shibli</a></span>, faculty of the <span class="text-orange-700 hover:text-orange-400"><a href="https://www.aust.edu/cse" target="_blank" rel="noreferrer">Department of Computer Science and Engineering</a></span> of Ahsanullah University of Science and Technology, focusing on Natural Language Processing, Computer Vision and Multimodal Deep Learning research.
      <br></br>
      <br></br>
      I have a keen interest in various research areas, including  <span class="text-sky-700 hover:text-orange-400">Multimodal Deep Learning</span>, <span class="text-sky-700 hover:text-orange-400">Natural Language Processing</span>, <span class="text-sky-700 hover:text-orange-400">Computer Vision</span>, <span class="text-sky-700 hover:text-orange-400">Human-Computer Interaction</span>, and <span class="text-sky-700 hover:text-orange-400">Machine Learning</span>.
      </p>
    </div>
    <hr/>
  <hr/>
  </div>
</div>

  );
};

export default Intro;
