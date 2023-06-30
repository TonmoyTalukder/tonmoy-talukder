import React from 'react';

const Recent = () => {
  return (
    
    <div class="mt-3">

        <h2 class="text-xl font-semibold">RECENT HIGHLIGHTS</h2>
        <hr/>
        <hr/>
            <div>
            <ul style={{listStyleType: "none"}}>
                <li>
                <p><span class="text-sm font-semibold">[June, 2023]</span> One Paper accepted in <span class="italic ">
                <span class="text-sky-600 hover:text-orange-400"><a href="https://confbim.com/" target="_blank" rel="noreferrer">BIM 2023</a></span></span> conference.</p>
                </li>
                <li>
                <p><span class="text-sm font-semibold">[August, 2022]</span> I have started research under the supervision of Mr. G M Shahariar Shibli, Faculty, Department of Computer Science and Engineering, Ahsanullah University of Science and Technology.</p>
                </li>
            </ul>
            </div>
        <hr/>

    </div>

  );
};

export default Recent;
