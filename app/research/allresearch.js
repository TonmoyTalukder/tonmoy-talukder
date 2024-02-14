'use client'
import React from 'react';
import { useState, useRef } from "react";

const Research = () => {
    let [openAbstract, setOpenAbstract] = useState(1);

    const handleOpenAbstract = () => {
        if(openAbstract == 1){
            setOpenAbstract(0);
        }
        else{
            setOpenAbstract(1);
        }
        console.log(openAbstract)
      };

      const spanRef = useRef(null);

    const handleCopy = () => {
        const spanText = spanRef.current.innerText;
        navigator.clipboard.writeText(spanText)
        .then(() => {
            console.log('Text copied successfully!');
            alert('Copied successfully!');
        })
        .catch((error) => {
            console.error('Error copying text:', error);
        });
    };
  return (
    
    <div id="research" className="mt-3">

        <h2 className="text-xl font-semibold">Research Quest</h2>
        <hr/>
        <hr/>
        <br></br> 
        <div>
            <p className="text-justify">
            I am deeply passionate about researching the utilization of natural language processing, computer vision, and multimodal learning, all engaged with human interaction. However, my particular focus is on utilizing these technologies to enhance the understanding and use of <i>low-resource languages</i>.<br></br><br></br>

            Recently, I have been actively engaged in multiple projects centered on <i>text summarization, text generation, text classification, question answering,</i> and <i>image captioning</i> within this domain. Additionally, my curiosity extends to understanding how machine learning models interact with data representations during training and how this interaction can be used to improve their performance.<br></br><br></br>

            What truly captivates my curiosity is the exploration of <u>how computers could learn from both languages and images simultaneously</u>, mirroring the multifaceted nature of human learning &mdash; <u>learning through listening, watching, and even feeling</u>. This captivating exploration fuels my enthusiasm, and I am eager to witness the boundless possibilities that await.<br></br><br></br>

            <strong className='font-extrabold'>Research Interest.</strong> My research interest lies in <span className="text-sky-700 hover:text-orange-400">Natural Language Processing</span>, <span className="text-sky-700 hover:text-orange-400">Natural Language Generation</span>, <span className="text-sky-700 hover:text-orange-400">&quot;low resource&quot; language</span>, <span className="text-sky-700 hover:text-orange-400">Multimodal Deep Learning</span>, <span className="text-sky-700 hover:text-orange-400">Computer Vision</span>, and <span className="text-sky-700 hover:text-orange-400">Human-Computer Interaction</span>.
            </p>
        </div>
        <br></br>
        {/* <hr/>
        <br></br>    
        <h2 className="text-lg font-semibold">Research Interest</h2>
        <hr/>
        <br></br>
        My research interest lies in <span className="text-sky-700 hover:text-orange-400">Natural Language Processing</span>, <span className="text-sky-700 hover:text-orange-400">Natural Language Generation</span>, <span className="text-sky-700 hover:text-orange-400">&quot;low resource&quot; language</span>, <span className="text-sky-700 hover:text-orange-400">Multimodal Deep Learning</span>, <span className="text-sky-700 hover:text-orange-400">Computer Vision</span>, and <span className="text-sky-700 hover:text-orange-400">Human-Computer Interaction</span>. Moreover, I am dedicated to exploring how machine learning models interact with data representations during training to enhance their performance.
        <br></br>
        <br></br> */}
        <hr/>
        <br></br>

        <h2 className="text-xl font-semibold">RESEARCH</h2>
        <hr/>
        <hr/>
    
            <br></br>
            <div>
                {/* <h3 className="text-lg font-bold text-indigo-700">Under Review 🔎</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">⏳ Bangla Key2Text: Text Generation from Keywords in Bengali </span></p> 
                            <p className="text-justify"><span className="font-semibold">Authors: </span> G. M. Shahariar*, and <span className="font-semibold text-orange-500 hover:text-orange-400">Tonmoy Talukder</span>*</p> 
                    <p className="text-xs italic">(* denotes equal contribution, names are listed in alphabetical order).</p>
                    
                    <p className="text-justify"><span className="text-sm font-semibold">Conference: </span> <span className="italic">The 2023 Conference on Empirical Methods in Natural Language Processing </span>
                    <span  className="text-sky-400 hover:text-orange-400 hover:underline"> <a href="https://2023.emnlp.org/">[EMNLP 2023]</a></span></p>
                    </li>
                </ul> */}
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-orange-500">Ongoing Works 📢</h3>
                <ul style={{listStyleType: "none"}}>
                    {/* <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Bangla Key2Text: Text Generation from Keywords in Bengali</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Bangla Key2Text V2: Bengali Text Generation from Stemmed Keywords</span>
                        </p>
                    </li> */}
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Image2Cap: Bengali Caption Generation from Images using Pre-trained Transformers</span>
                        </p>
                    </li>
                    {/* <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Cross Lingual Key2Text: Bengali Text Generation from Cross-Lingual Keywords</span>
                        </p>
                    </li> */}
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Multimodal Image and Text Classification using Pre-trained Transformers</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Bangla Hate Speech Classification using Pre-Trained Transformers on a Benchmark Dataset</span>
                        </p>
                    </li>
                </ul>
            </div>
        <hr/>

    </div>

  );
};

export default Research;
