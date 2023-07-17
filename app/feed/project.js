import React from 'react';

const Projects = () => {
  return (
    
    <div className="mt-3">

        <h2 className="text-xl font-semibold">PROJECTS</h2>
        <hr/>
        <hr/>
            <div>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [February, 2023]</span> <span className="text-sky-700 font-bold">Bangla-KeywordExtractor</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>BanglaBERT based keywords extractor of Bangla Sentences. This extractor works calculating cosine similarity of each word embedding with the mean embedding.</p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400"><a href="#">PyPl</a></span>] [<span className="text-sky-400 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder/Bangla-KeywordExtractor">GitHub Repository</a></span>]</p>
                    </li>
                </ul>     
                <br></br>       
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [January, 2023]</span> <span className="text-sky-700 font-bold">Bengali Hate Speech classification</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>NLP classification with different machine learning algorithms with hyperparameter fine tuning, Ensemble approaches.</p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder/Analysis-on-ML-Model-s-Classification-of-Bengali-Hate-Speech-in-Different-Social-Contexts">GitHub Repository</a></span>]</p>
                    </li>
                </ul>         
                <br></br>    
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [March, 2022]</span> <span className="text-sky-700 font-bold">BookPedia Prototype - A Social Media (React + ASP.NET Framework Project)</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>BookPedia is a social media for the literary and academia personals. In this platform everyone can upload book and blogs and give rating them. It&apos;s just a prototype version as a university software development lab project. We are developing it in large scale. <br></br>
                    <b className="text-justify">Frontend:</b> JavaScript, React JS, Material UI <br></br>
                    <b className="text-justify">Backend:</b> C#, ASP.NET Framework <br></br>
                    <b className="text-justify">Database:</b> Entity Framework </p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder/bookpedia-frontend">Frontend GitHub Repository</a></span>] [<span className="text-sky-400 hover:text-orange-400"><a href="https://github.com/InfiniteY-Lab/BookPediaAPIV0.0.12">Backend GitHub Repository</a></span>]</p>
                    </li>
                </ul>           
                <br></br>  
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="text-sm font-semibold">💻 [October, 2021]</span> <span className="text-sky-700 font-bold">Churning Telecom Company Prediction</span></p>
                    <p className="text-justify"><span className="font-semibold">Description: </span>Applied One-hot Encoding, Decision Tree classification, Grid Search & Cross-Validation, Confusion Matrix, classification report, and ROC-AUC.</p>
                    <p className="text-justify">[<span className="text-sky-400 hover:text-orange-400"><a href="https://github.com/TonmoyTalukder/Churning-Telecom-Company-Prediction">GitHub Repository</a></span>]</p>
                    </li>
                </ul>            
            </div>
            <hr/>
            {/* <br></br> */}
    </div>

  );
};

export default Projects;
