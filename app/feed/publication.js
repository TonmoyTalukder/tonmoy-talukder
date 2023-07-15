import React from 'react';

const Publications = () => {
  return (
    
    <div class="mt-3">

        <h2 class="text-xl font-semibold">RESEARCH & PUBLICATIONS</h2>
        <hr/>
        <hr/>
            <div>
                <h3 class="text-lg font-bold text-green-700">Publications 📄</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p class="text-justify"><span class="text-sm font-semibold">📌 [September, 2023]</span> <span class="text-sky-700 font-bold">Rank Your Summaries: Enhancing Bengali Text Summarization via Ranking-based Approach</span></p>
                    <p class="text-justify"><span class="font-semibold">Authors: </span> G. M. Shahariar*, <span class="font-semibold text-orange-500">Tonmoy Talukder</span>*, Rafin Alam Khan Sotez, and Md. Tanvir Rouf Shawon</p> 
                    <span class="text-xs italic">(* denotes equal contribution, names are listed in alphabetical order).</span>
                    <p class="text-justify"><span class="text-sm font-semibold">Conference: </span> <span class="italic">International Conference on Big Data, IoT and Machine Learning (BIM 2023)</span></p>
                    <p class="text-justify">[<span class="text-sky-400 hover:text-orange-400">Abstract</span>] [<span class="text-sky-400 hover:text-orange-400">PDF</span>] [<span class="text-sky-400 hover:text-orange-400">Code & Dataset</span>] [<span class="text-sky-400 hover:text-orange-400">Presentation</span>] [<span class="text-sky-400 hover:text-orange-400">Citation bib</span>]</p>
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 class="text-lg font-bold text-indigo-700">Under Review 🔎</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <p class="text-justify"> 
                            <span class="text-amber-800 font-semibold">⏳ Bangla Key2Text: Text Generation from Keywords in Bengali </span>
                            <span  class="text-sky-400 hover:text-orange-400"> <a href="https://2023.emnlp.org/">[EMNLP 2023]</a></span>
                        </p> 
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 class="text-lg font-bold text-orange-500">Ongoing Works 📢</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                        <p class="text-justify"> 
                            <span class="text-amber-800 font-semibold">🔨 Vision2Cap: Bengali Caption Generation from Images using Pre-trained Transformer</span>
                        </p>
                    </li>
                    <li>
                        <p class="text-justify"> 
                            <span class="text-amber-800 font-semibold">🔨 Cross Lingual Key2Text: Bengali Text Generation from Multi-Lingual Keywords</span>
                        </p>
                    </li>
                </ul>
            </div>
        <hr/>

    </div>

  );
};

export default Publications;
