import React from 'react';

const Info = () => {
    
  return (
    
    <div className="mt-3">

        <h2 className="text-xl font-semibold">INFO</h2>
        <hr/>
        <hr/>
            <div>
                <h3 className="text-lg font-bold text-sky-800">Teaching Experience</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">💼 Technovation</span> <br></br>
                    <span className="font-medium text-slate-800">Mentor</span> (<span className="text-sky-400">December, 2021 - Present</span>)</p>
                    <p className="text-justify">
                    Technovation is a program of Iridescent, which is a non-profit organization in the United States. It is the world&apos;s largest and longest running tech competition for girls.<br></br> <span className="font-medium">Responsible for... </span><br></br></p>
                    <ul className="text-justify">
                        <li>&emsp;• Mentoring students to learn App Development, AI & Machine Learning Tools</li>
                        <li>&emsp;• Helping students to develop projects for the Technovation Global Competition</li>
                    </ul>
                    <span className="font-medium">Work Nature: </span> Volunteer
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-sky-800">Education</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="font-semibold">🎓 Ahsanullah University of Science and Technology, Dhaka 1208</span> <br></br>
                    <span className="font-medium text-slate-800">Bachelor of Science in Computer Science and Engineering</span> (<span className="text-sky-400">2018-2023</span>)</p>
                    <p className="text-justify"><span className="font-semibold">Supervisor:</span> <span className="text-orange-700 hover:text-orange-400 hover:underline"><a href="https://shahariar-shibli.github.io/" target="_blank" rel="noreferrer">Mr. G. M. Shahariar Shibli</a></span></p>
                    <p className="text-justify"><span className="font-semibold">Research Experience: </span> Natural Language Processing, Computer Vision and Multimodal Deep Learning</p>
                    <p className="text-justify"><span className="font-semibold">Technical Skills: </span> <span>Pytorch, Tensorflow, Python, MERN Stack (Full) Development, Javascript, SQL, C and C++.</span></p>
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-sky-800">Contact</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">📧 Email: </span>
                    <span className="text-orange-700 hover:text-orange-400 hover:underline"><a href="mailto:tonmoytalukder.cs@gmail.com">tonmoytalukder [dot] cs [at] gmail [dot] com</a></span></p>
                    </li>
                    <li>
                    <p><span className="font-semibold">🌍 Live in: </span>
                    <span className="text-slate-800">Mirpur, Dhaka 1216, Bangladesh</span></p>
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            {/* <div>
            <script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=58mzz8jl3nk&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=verdana&amp;l=0&amp;s=220" async="async"></script>
            <h1>Welcome to my page!</h1>
    </div> */}



    </div>

  );
};

export default Info;
