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
            I am passionate about researching the utilization of natural language processing, computer vision, and multimodal learning. I am particularly interested in how to utilize these technologies to improve the understanding and use of <i>low-resource languages</i>. Recently, I am actively engaged in multiple projects that revolve around <i>text summarization</i>, <i>text generation</i>, <i>text classification</i>, <i>question answering</i>, and <i>image captioning</i> within this domain. I am also interested in understanding how machine learning models interact with data representations during training, and how this can be used to improve their performance.
            </p>
        </div>
        <br></br>    
        <hr/>
        <br></br>

        <h2 className="text-xl font-semibold">RESEARCH</h2>
        <hr/>
        <hr/>
    
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-indigo-700">Under Review 🔎</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">⏳ Bangla Key2Text: Text Generation from Keywords in Bengali </span></p> 
                            <p className="text-justify"><span className="font-semibold">Authors: </span> G. M. Shahariar*, and <span className="font-semibold text-orange-500 hover:text-orange-400">Tonmoy Talukder</span>*</p> 
                    <p className="text-xs italic">(* denotes equal contribution, names are listed in alphabetical order).</p>
                    
                    <p className="text-justify"><span className="text-sm font-semibold">Conference: </span> <span className="italic">The 2023 Conference on Empirical Methods in Natural Language Processing </span>
                    <span  className="text-sky-400 hover:text-orange-400 hover:underline"> <a href="https://2023.emnlp.org/">[EMNLP 2023]</a></span></p>
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-orange-500">Ongoing Works 📢</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Bangla Key2Text V2: Bengali Text Generation from Stemmed Keywords</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Image2Cap: Bengali Caption Generation from Images using Pre-trained Transformers</span>
                        </p>
                    </li>
                    <li>
                        <p className="text-justify"> 
                            <span className="text-amber-800 font-semibold">🔨 Cross Lingual Key2Text: Bengali Text Generation from Cross-Lingual Keywords</span>
                        </p>
                    </li>
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
