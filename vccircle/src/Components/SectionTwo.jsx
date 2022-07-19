import React from "react";

export default function SectionTwo() {
  return (
    <div className="container">
      <div className="section-one">
        <div className="section-details">
          <p className="section-detail-heading">Manufacturing</p>
          <p className="section-detail-title">
            Warburg Pincus set to acquire majority stake in auto parts maker
          </p>
          <p className="section-detail-desc">
            Private equity firm TPG, which is reportedly heading towards a
            public listing, said on Thursday it had appointed long-time company
            executive Todd Sisitsky as president, effective immediately.
          </p>
          <p className="section-detail-author">
            30 September . Madhurima Nandy
          </p>
          <button className="section-detail-button">Read More</button>
        </div>

        <img
          src="./Images/manufacturing.png"
          alt="section-im"
          className="section-sub-img"
        />




        <div className="section-img"></div>

      </div>



      <div className="editor-section-three editor-width re-editor-sidead res-editor-section-sidead">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad res-sidead"/>
        </div>







      <div className="section-two">
        <div className="card-1 res-card-1">
          <div className="premium-container">
          <img src="./Images/card-img1.png" className="res-small-pic" alt="" />
          <span className="premium-text">PREMIUM</span>
          </div>
          <div className="res-card-details ">
            
            <p className="card-title">ECONOMY</p>
            <p className="card-desc">
              Indian shares snap 5-day rally on weak global cues, post weekly
              gain
            </p>
            <p className="card-author">30 September . Madhurima Nandy +1</p>
          </div>
        </div>
        <div className="card-2 res-card-1">

          <div className="premium-container">
          <img src="./Images/card-img2.png" className="res-small-pic" alt="" />
          <span className="premium-text">PREMIUM</span>
          </div>
          <div className="res-card-details ">
            

            <p className="card-title">FINANCE</p>
            <p className="card-desc">
            Paytm to shut Canada B2C app amid eroding market capitalisation
            </p>
            <p className="card-author">30 September . Madhurima Nandy</p>
          </div>
        </div>
        <div className="card-3 res-card-1">
          <div className="sec-two-img-consu">
          <img src="./Images/card-img3.png" alt="" />

          </div>
          <div className="res-card-details">
            <p className="card-title">CONSUMER</p>
            <p className="card-desc">
            Exclusive: PE-backed sauce maker Wingreens acquires Lok Capital-backed cereal maker
            </p>
            <p className="card-author">30 September . Madhurima Nandy +1</p>
          </div>
        </div>
        <div className="card-4 res-card-1">
        <div className="premium-container">
          <img src="./Images/card-img4.png" className="res-small-pic" alt="" />
          <span className="premium-text">PREMIUM</span>
          </div>
          <div className="res-card-details premium-container">
            <p className="card-title">ECONOMY</p>
            <p className="card-desc">
            GLOBAL MARKETS-European shares in the red after hawkish Fed comments
            </p>
            <p className="card-author">30 September . Madhurima Nandy </p>
          </div>
        </div>
      </div>

      <div className="editor-section-three editor-width re-editor-sidead res-editor-section-sidead">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad res-sidead"/>
        </div>
    </div>
  );
}
