import React from "react";

export default function EditorSection(props) {
  return (
    <div className="container">
      <h2 className="editor-section-heading">{props.title}</h2>
      <div className="editor-section">
        <div className="editor-section-one editor-width ">
        
         <div className="res-edit-head">
          <div className="premium-container">
          <span className="premium-text-editor" style={props.st}>PREMIUM</span>
         <img src={props.editorImg} alt="" className="res-editor-head-img"/>
          </div>
         </div>
         
          <p className="editor-section-title">{props.editorTitle}</p>
          <p className="editor-section-desc">{props.editorDesc}</p>
          <p className="editor-section-author">
            30 September . Madhurima Nandy
          </p>
        </div>
{/* 3 Small Divs */}
        <div className="editor-width editor-border-right">
          <div  className=" editor-section-two editor-border">
            <div className="editor-section-two-img">

            <div className="premium-container">
          <span className="premium-text-editor-2" >PREMIUM</span>
          <img
                src={props.editorImg2}
                alt=""
                width={props.clsMainImg2}
                className="res-smallpic "
              />
        
          </div>





              
            </div>
            <div className="editor-section-two-details ">
              <p className="editor-section-two-details-title">
                {props.editorTitle2}
              </p>
              <p className="editor-section-two-details-desc">
                {props.editorDesc2}
              </p>
              <p className="editor-section-two-details-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>


          <div className=" editor-section-two editor-border">
            <div className="editor-section-two-img premium-container">
            <span className="premium-text-editor" style={props.st2}>PREMIUM</span>
              <img
                src={props.editorImg3}
                alt=""
                width={props.clsMainImg3}
                className="res-smallpic "
              />
            </div>
            <div className="editor-section-two-details ">
          
              <p className="editor-section-two-details-title">
                {props.editorTitle3}
              </p>
              <p className="editor-section-two-details-desc">
                {props.editorDesc3}
              </p>
              <p className="editor-section-two-details-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>


          <div className=" editor-section-two">
            <div className="editor-section-two-img">
              <img
                src={props.editorImg4}
                alt=""
                width={props.clsMainImg4}
                className="res-smallpic "
              />
            </div>
            <div className="editor-section-two-details">
              <p className="editor-section-two-details-title">
                {props.editorTitle4}
              </p>
              <p className="editor-section-two-details-desc">
                {props.editorDesc4}
              </p>
              <p className="editor-section-two-details-author">
                30 September . Madhurima Nandy
              </p>
            </div>
          </div>
        </div>

        <div className="res-sidead-none">
          
        <div className="editor-section-three editor-width re-editor-sidead ">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad res-sidead"/>
        </div>
        </div>
      </div>
      <hr className={props.display}/>
    </div>
  );
}
