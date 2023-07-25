'use client'
import React from 'react';
import { useState, useRef } from "react";

const Allinfos = () => {
    let [openPeace, setOpenPeace] = useState(1);
    let [openCreatech, setOpenCreatech] = useState(1);
    let [openAlphabit, setOpenAlphabit] = useState(1);

    const handleOpenPeace = () => {
        if(openPeace == 1){
            setOpenPeace(0);
            if(openCreatech == 0){
                setOpenCreatech(1);
            }
            if(openAlphabit == 0){
                setOpenAlphabit(1);
            }
        }
        else{
            setOpenPeace(1);
        }
        console.log(openPeace)
      };

    const handleOpenCreatech = () => {
        if(openCreatech == 1){
            setOpenCreatech(0);
            if(openPeace == 0){
                setOpenPeace(1);
            }
            if(openAlphabit == 0){
                setOpenAlphabit(1);
            }
        }
        else{
            setOpenCreatech(1);
        }
        console.log(openCreatech)
      };

    const handleOpenAlphabit = () => {
        if(openAlphabit == 1){
            setOpenAlphabit(0);
            if(openPeace == 0){
                setOpenPeace(1);
            }
            if(openCreatech == 0){
                setOpenCreatech(1);
            }
        }
        else{
            setOpenAlphabit(1);
        }
        console.log(openAlphabit)
      };
  return (
    
    <div id="info" className="mt-3">

        <h2 className="text-xl font-semibold">What I am into</h2>
        <hr/>
        <hr/>
        <br></br> 
        <div>
            <p className="text-justify">
            Data science, machine learning, deep learning, and artificial intelligence are some of my favorite computer science fields. Despite the fact that web development has always attracted my curiosity. I have MERN Stack development expertization. <br></br>
            
            Python development, as well as Android and iOS app development, are also areas of interest for me. <br></br>

            I enjoy reading blogs about literature, history, and technology in addition to them.
            </p>
        </div>
        <br></br>    
        <hr/>
        <br></br>    

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
                    <span className="font-medium">Work Nature: </span> Volunteer<br></br>
                    <span className="font-medium">Mentored Teams: </span> <br></br>
                    <ul>
                        <li>
                        
                            <span className='text-zinc-700' onClick={handleOpenPeace}><span>&emsp;{openPeace == 1 && <span>&#x25B6;</span>}{openPeace == 0 && <spa>&#x25BC;</spa>}</span>Team:  The Peace Ambassadors</span>
                        {openPeace == 0 &&<div style={{paddingLeft: '5.2%'}}>
                            <div className='bg-zinc-300 rounded-md p-2 text-neutral-800 font-sans'>
                            <span className='underline text-green-600'>Conducted in Season 2023</span><br></br>
                            <span className='font-medium'>Project Name</span>: SERENE <br></br>
                            <span className='font-medium'>Description</span>: Depression-based app. Implemented AI Diary, Firebase Authentication, AI Chatbot, AI Quiz along with other features.
                            </div>
                        </div>}
                        </li>
                        <li>
    
                            <span className='text-zinc-700' onClick={handleOpenCreatech}><span>&emsp;{openCreatech == 1 && <span>&#x25B6;</span>}{openCreatech == 0 && <span>&#x25BC;</span>}</span>Team:  Createch</span>
                            
                        {openCreatech == 0 &&<div style={{paddingLeft: '5.2%'}}>
                            <div className='bg-zinc-300 rounded-md p-2 text-neutral-800 font-sans'>
                            <span className='underline text-green-600'>Conducted in Season 2022</span><br></br>
                            <span className='font-medium'>Project Name</span>: ROOT<br></br>
                            <span className='font-medium'>Description</span>: Machine learning-based plant disease detection and blog app.
                            </div>
                        </div>}
                        </li>
                        
                        <li>
                      
                            <span className='text-zinc-700'onClick={handleOpenAlphabit}><span>&emsp;{openAlphabit == 1 && <span>&#x25B6;</span>}{openAlphabit == 0 && <span>&#x25BC;</span>}</span>Team: AlphaBit&apos;s AI</span>
                            
                        {openAlphabit == 0 &&<div style={{paddingLeft: '5.2%'}}>
                            <div className='bg-zinc-300 rounded-md p-2 text-neutral-800 font-sans'>
                            <span className='underline text-green-600'>Conducted in Season 2022</span><br></br>
                            <span className='font-medium'>Project Name</span>: FITIFY <br></br>
                            <span className='font-medium'>Description</span>: Blog app on BMI and BMR with AI calculator to find BMI and BMR scores.
                            </div>
                        </div>}
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-sky-800">Education</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">🎓 Ahsanullah University of Science and Technology, Dhaka 1208</span> <br></br>
                    <span className="text-slate-800">Bachelor of Science in Computer Science and Engineering</span> (<span className="text-sky-400">2018 - 2023</span>)</p>
                    <p className="text-justify"><span className="font-semibold">Research Experience: </span> Natural Language Processing, Computer Vision and Multimodal Deep Learning</p>
                    <p className="text-justify"><span className="font-semibold">Technical Skills: </span> <span>Pytorch, Tensorflow, Python, MERN Stack (Full) Development, Javascript, SQL, C++ and C.</span></p>
                    </li>
                </ul>
                <br></br>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">🎓 Agriculture University College, Mymensingh 2202</span> <br></br>
                    <span className="text-slate-800">Higher Secondary (Science)</span> (<span className="text-sky-400">2015 - 2027</span>)</p>
                    <p className="text-justify"><span className="font-semibold">Extra Curricular Activities: </span> District level programming contest.</p>
                    <p className="text-justify"><span className="font-semibold">Technical Skills: </span> <span>HTML, CSS and C.</span></p>
                    </li>
                </ul>
                <br></br>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">🎓 St. Joseph Higher Secondary School, Dhaka 1207</span> <br></br>
                    <span className="text-slate-800">Higher Secondary (Science)</span> (<span className="text-sky-400">2015</span>)</p>
                    <p className="text-justify"><span className="font-semibold">Extra Curricular Activities: </span> Writing competition.</p>
                    <p className="text-justify"><span className="font-semibold">Technical Skills: </span> <span>HTML.</span></p>
                    </li>
                </ul>
                <br></br>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p className="text-justify"><span className="font-semibold">🎓 Kalmakanda Government Pilot High School, Kalmakanda, Netrakona, Mymensingh 2430</span> <br></br>
                    <span className="text-slate-800">Secondary School</span> (<span className="text-sky-400">2010 - 2015</span>)</p>
                    <p className="text-justify"><span className="font-semibold">Extra Curricular Activities: </span> District level Science Fair Project competition, National Scout Camping, Drama competition.</p>
                    </li>
                </ul>
            </div>
            <hr/>
            <br></br>
            <div>
                <h3 className="text-lg font-bold text-sky-800">Volunteer Experience</h3>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">💼 Pushpa Child Forum</span> <br></br>
                    <span className="font-medium text-slate-800">President</span> (<span className="text-sky-400">October, 2013 - October, 2016</span>)<br></br>
                    <span className="font-medium text-slate-800">Member</span> (<span className="text-sky-400">2007 - September, 2013</span>)</p>
                    <p className="text-justify">
                    Pushpa Child Forum is a children organization of World Vision Bangladesh, Kalmakanda ADP, Netrakona, Mymensingh 2430. It works for children&apos;s organizational skills development along with preach social awareness among the rural areas.<br></br>
                    <span className="font-semibold">Work Nature: </span> Volunteer
                    </p>
                    </li>
                </ul>
                <br></br>
                <ul style={{listStyleType: "none"}}>
                    <li>
                    <p><span className="font-semibold">💼 Bangladesh Boy&#39;s Scout</span> <br></br>
                    <span className="font-medium text-slate-800">Boy&apos;s Scout (National Jamboree Team)</span> (<span className="text-sky-400">October, 2012 - March, 2015</span>)<br></br>
                    <span className="font-medium text-slate-800">Boy&apos;s Scout (High School Team)</span> (<span className="text-sky-400">March, 2010 - September, 2012</span>)<br></br>
                    </p>
                    <p className="text-justify">
                    Member of Kalmakanda Government Pilot High School Scout team for the national jamboree camps. Kalmakanda, Netrakona, Mymensingh 2430. <br></br>
                    <span className="font-semibold">Work Nature: </span> Volunteer
                    </p>
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
                    <span className="text-orange-700"><a href="mailto:tonmoytalukder.cs@gmail.com">tonmoytalukder [dot] cs [at] gmail [dot] com</a></span></p>
                    </li>
                    <li>
                    <p><span className="font-semibold">🌍 Live in: </span>
                    <span className="text-slate-800">Mirpur, Dhaka 1216, Bangladesh</span></p>
                    </li>
                </ul>
            </div>
            <hr/>
            {/* <br></br> */}
    </div>

  );
};

export default Allinfos;
