import React from 'react'

export default function SocialComp() {
  return (
    <div className='container'>

        <div className="social-main ">
            <div className="twitter-section  ">
                <img src='./Images/social-twitter.png' className='res-twitter'/>
                <div className="vcinvestment">
                    <span>VCCircle.com </span>
                    <p>World Bank arm IFC to double down its investments into funds in 2022</p>
                </div>
            </div>
            
                
            
            <div className="infographic-section ">
            <p className="infographic-text-para">INFOGRAPHIC</p>
                <img src="./Images/infographic.png" className="social-infographic-img"alt=""/>
            </div>
            <div className="editor-section-three side-res-ad">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad "/>
        </div>
        </div>
        <hr className='line-bottom'/>
    </div>
  )
}
