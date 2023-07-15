import React from 'react';

const Allrecent = () => {
  return (
    
    <div id="recent" class="mt-3">

        <h2 class="text-xl font-semibold">Accomplishments</h2>
        <hr/>
        <hr/>
        <br></br> 
        <div>
            <p class="text-justify">
            I have successfully earned my Bachelor&apos;s degree in Computer Science and Engineering and am currently engaged in research work under the guidance of my undergraduate supervisor, Mr. <span class="text-orange-700 hover:text-orange-400"><a href="https://shahariar-shibli.github.io/" target="_blank" rel="noreferrer">G. M. Shahariar Shibli</a></span>, faculty of the <span class="text-orange-700 hover:text-orange-400"><a href="https://www.aust.edu/cse" target="_blank" rel="noreferrer">Department of Computer Science and Engineering</a></span> of Ahsanullah University of Science and Technology.
            </p>
        </div>
        <br></br>    
        <hr/>
        <br></br> 

        <h2 class="text-xl font-semibold">RECENT HIGHLIGHTS ⚡</h2>
        <hr/>
        <hr/>
            <div>
            <ul style={{listStyleType: "none"}}>
                <li className='py-2'>
                <p class="text-justify"><span class="text-sm font-semibold">[September, 2023]</span> One Paper <span style={{color: 'green'}}>published</span> at <span class="italic ">
                <span class="text-sky-600 hover:text-orange-400"><a href="https://confbim.com/" target="_blank" rel="noreferrer">BIM 2023</a></span></span>, Springer Lecture Notes in Networks and Systems.</p>
                </li>
                <li className='py-2'>
                <p class="text-justify"><span class="text-sm font-semibold">[July, 2023]</span> One Paper <span style={{color: 'blue'}}>accepted</span> at <span class="italic ">
                <span class="text-sky-600 hover:text-orange-400"><a href="https://confbim.com/" target="_blank" rel="noreferrer">BIM 2023</a></span></span> conference.</p>
                </li>
                <li className='py-2'>
                <p class="text-justify"><span class="text-sm font-semibold">[August, 2022]</span> I have started <span style={{color: '#FF0000'}}>research</span>  under the supervision of Mr. G M Shahariar Shibli, Faculty, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology.</p>
                </li>
            </ul>
            </div>
        <hr/>

    </div>

  );
};

export default Allrecent;
