import "./App.css";
import "./Responsive.css";
import Navbar from "./Components/Navbar";
import Advertisement from "./Components/Advertisement";
import SectionTwo from "./Components/SectionTwo";
import EditorSection from "./Components/EditorSection";
import SocialComp from "./Components/SocialComp";
import Carousel from "./Components/Carousel";
import {caraImg,preImg,upImage,foundersData,tmtImg,techImg,maImg,finImg} from "./Image Store/CaraouselImages";
import VcPremium from "./Components/VcPremium";
import UpcomingEvents from "./Components/UpcomingEvents";
import VccTv from "./Components/VccTv";
import Signup from "./Components/Signup";
import MoreStories from "./Components/MoreStories";
import Footer from "./Components/Footer";
import UpcomingEventsResponsive from "./Components/UpcomingEventsResponsive";

function App() {
  return (
    <>
      <Navbar /> 
     <Advertisement
        src="./Images/advertisement.png"
        pad={{ padding: "1rem 10rem" }}
        width="100%"
      />  
        <SectionTwo /> 
      <Advertisement
        src="./Images/advertisement2.png"
        pad={{ padding: "1rem 21rem" }}
        width="100%"
      />   
       <EditorSection
       title="Editor's Pick"
        editorImg="./Images/economyman.png"
        editorTitle="ECONOMY"
        editorDesc="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall"
        editorImg2="./Images/card-img2.png" clsMainImg2="100%"
        editorTitle2="FINANCE"
        st2={{display:"none"}}
        editorDesc2="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm"
        editorImg3="./Images/card-img3.png" clsMainImg3="100%"
        editorTitle3="TMT"
        editorDesc3="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation"
        editorTitle4="Consumer"
        editorImg4="./Images/card-img4.png" clsMainImg4="100%"
        editorDesc4="Delivery race among Indian grocery startups brings road safety risks" 
       
       />  
       <SocialComp/>  
       <Carousel cheading="Limited Partners"caraDataOne={caraImg}/>  
       <div className="editor-section-three editor-width re-editor-sidead res-editor-section-sidead">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad res-sidead"/>
        </div>
       <Advertisement src="./Images/advertisement2.png"
        pad={{ padding: "1rem 21rem" }}
        width="100%"
        /> 
        <VcPremium preImg={preImg}/>
        <UpcomingEventsResponsive/>
        <UpcomingEvents upImage={upImage}/>
        <Carousel cheading="Founders" caraDataOne={foundersData}/>
        <div className="editor-section-three editor-width re-editor-sidead res-editor-section-sidead">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad res-sidead"/>
        </div>
        <Advertisement src="./Images/advertisement2.png"
        pad={{ padding: "1rem 21rem" }}
        width="100%"
        />
        <EditorSection
        title="Most Popular"
        editorImg="./Images/building.png"
        st={{display:"none"}}
        editorTitle="TMT"
        editorDesc="Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax"
        editorImg2="./Images/mo-coins.png" clsMainImg2="100%"
        st2={{bottom: "6%",right: "2%"}}
        editorTitle2="CONSUMER"
        editorDesc2="Consumer firm Madbow bags $2 mn funding at $13 mn valuation"
        editorImg3="./Images/mo-economy.png" clsMainImg3="100%"
        editorTitle3="ECONOMY"
        editorDesc3="Indian shares hit three-week lows in broad-based selling"
        editorTitle4="MANUFACTURING"
        editorImg4="./Images/mo-infra.png" clsMainImg4="100%"
        editorDesc4="HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3"
        display="display"
      />


      <Advertisement src="./Images/advertisement2.png"
        pad={{ padding: "1rem 21rem" }}
        width="100%"
        /> 
        <VccTv/>
        <Carousel cheading="TMT" caraDataOne={tmtImg}/>
        <Signup/>
         <Carousel cheading="TECHCIRCLE" caraDataOne={techImg}/> 

        <div className="editor-section-three editor-width re-editor-sidead res-editor-section-sidead">
            <p className='sidead-para'>Advertisement</p>
            <img src="./Images/sidead.png" alt="" className="side-ad res-sidead"/>
        </div>

        <Advertisement src="./Images/advertisement2.png"
        pad={{ padding: "1rem 21rem" }}
        width="100%"
        />
        <Carousel cheading="Mergers & Acquisitions" caraDataOne={maImg}/>
        <Carousel cheading="Financials" caraDataOne={finImg}/>  
         <MoreStories/>
      <Footer/>      
       
    </>
  );
}

export default App;
