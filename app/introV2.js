'use client'
import {React, useRef, useEffect, useState} from 'react';
import Image from 'next/image'
import Typed from 'typed.js';
// import Typewriter from 'typewriter-effect';

const IntroV2 = () => {
  const el = useRef(null);

  useEffect(() => {
    // Check if el.current is not null before initializing the Typed instance
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['<span style="font-weight: 500;">I am an Aspiring PhD Candidate</span>', 
        '<span style="font-weight: 500;">I am a NLP &amp; Computer Vision Research Enthusiast</span>'],
        typeSpeed: 150,
        loop: true,
        contentType: 'html',
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  const [textToSpeak, setTextToSpeak] = useState('Tohn-moy Tah-LOOk-dahr');

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
  };

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
      <h1 className="text-2xl font-bold text-center">Tonmoy Talukder <span className='font-normal text-sm text-stone-600'>(He/Him)</span></h1><h3 className='text-center'>[tɒnˈmɔɪ təˈluːkdər] <button onClick={speak}>🔊</button></h3> <br></br>
      {/* <Image src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg" className="h-60 w-60 rounded-full mx-auto" 
      width={800}
      height={500}
      alt="Image"/> */}
      <p className="text-center h-7">
      <span style={{text: 'bold'}} ref={el} />
      </p>

      <br></br>
      <br></br>

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
    </div>
    <hr/>
  <hr/>
  </div>
</div>

  );
};

export default IntroV2;
