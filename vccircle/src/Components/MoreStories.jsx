import React from "react";
import Advertisement from "./Advertisement";

export default function MoreStories() {
  return (
    <>
      <div className="container">
        <h3 className="ms-main-heading">More Stories</h3>
        <div className="morestories-main">
          <div>
            <div className="ms-sectionone">
              <div className="ms-img-res-div">
                <img src="./Images/money.png" alt="money-img" className="ms-img-res" />
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">FINANCE</h3>
                <p className="ms-para">
                  DSG Consumer Partners likely to raise nearly $125 mn for new
                  fund
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy, Madhurima Nandy
                </p>
              </div>
            </div>
            <div className="ms-sectionone ">
            <div className="premium-container">
              <div className=".ms-img-res-div">
                <img src="./Images/consumer.png" alt="money-img" className="ms-img-res"/>
                <span className="premium-text-ms-2">PREMIUM</span>
              </div>
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">Consumer</h3>
                <p className="ms-para">
                  RPSG Capital Ventures to raise Rs 500 cr for consumer-focused
                  fund
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy, Madhurima Nandy
                </p>
              </div>
            </div>
            <div className="ms-sectionone">
              <div>
                <img src="./Images/people.png" alt="money-img" className="ms-img-res"/>
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">People</h3>
                <p className="ms-para">
                  Jobs portal Apna appoints former PayU’s Shantanu Preetam as
                  its first CTO
                </p>
                <p className="ms-sub-para">30 September . Madhurima Nandy</p>
              </div>
            </div>
          </div>

          <div>
            <div className="ms-sectiontwo ">
              <div className="premium-container">

              <div>
                <img src="./Images/mseconomy.png" alt="eco-img" className="ms-img-res"/>
              </div>
              <span className="premium-text-ms-1">PREMIUM</span>

              </div>
              <div className="ms-details">
                <h3 className="ms-heading">ECONOMY</h3>
                <p className="ms-para">
                GLOBAL MARKETS - Asia shares fall as Treasury yields hit fresh highs
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy
                </p>
              </div>
            </div>

            <div className="ms-sectiontwo">
              <div className="ms-img-res-div">
                <img src="./Images/kotak.png" alt="money-img" className="ms-img-res"/>
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">TMT</h3>
                <p className="ms-para">
                Kotak’s asset arm, others lead $6 mn bet on cancer detection platform Epigeneres
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy, Madhurima Nandy
                </p>
              </div>
            </div>

            <div className="ms-sectiontwo premium-container">
            <div className="premium-container">

              <div>
                <img src="./Images/msfinance.png" alt="eco-img" className="ms-img-res"/>
              </div>
              <span className="premium-text-ms-1">PREMIUM</span>

              </div>
              <div className="ms-details">
                <h3 className="ms-heading">FINANCE</h3>
                <p className="ms-para">
                Actis in talks to acquire Welspun group’s roads for up to Rs 10,000 cr
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Advertisement
        src="./Images/advertisement2.png"
        pad={{ padding: "1rem 21rem" }}
        width="100%"
      />



<div className="container">
        <div className="morestories-main res-morestoriesmain">
          <div>
            <div className="ms-sectionone">
              <div>
                <img src="./Images/msconsumer.png" alt="money-img" />
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">CONSUMER</h3>
                <p className="ms-para">
                Actor Tiger Shroff, BharatPe’s Ashneer Grover, others back Freadom
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy, Madhurima Nandy
                </p>
              </div>
            </div>
            <div className="ms-sectionone ">
              <div className="premium-container">
              <div>
                <img src="./Images/mseco.png" alt="money-img" />
              </div>

            <span className="premium-text-ms-5">PREMIUM</span>
              </div>
              
              <div className="ms-details">
                <h3 className="ms-heading">ECONOMY</h3>
                <p className="ms-para">
                Indian shares slip after five-day rally; HCL top drag ahead of results
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy
                </p>
              </div>
            </div>
            <div className="ms-sectionone ">
              <div className="premium-container">

            <span className="premium-text-ms-6">PREMIUM</span>
              <div>
                <img src="./Images/msconsumer2.png" alt="money-img" />
              </div>

              </div>
              <div className="ms-details">
                <h3 className="ms-heading">CONSUMER</h3>
                <p className="ms-para">
                Dogsee Chew raises Rs 50 cr in Series A from Mankind Pharma; Sixth Sense Ventures
                </p>
                <p className="ms-sub-para">30 September . Madhurima Nandy</p>
              </div>
            </div>
          </div>

          <div>
            <div className="ms-sectiontwo premium-container">
              <span className="premium-text-ms-4">PREMIUM</span>
              <div>
                <img src="./Images/msinfra.png" alt="money-img" />
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">INFRASTRUCTURE</h3>
                <p className="ms-para">
                Shadowfax’s pivot pays off as focus sharpens on last mile delivery
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy
                </p>
              </div>
            </div>

            <div className="ms-sectiontwo">
              <div>
                <img src="./Images/mshealthcare.png" alt="money-img" />
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">HEALTHCARE</h3>
                <p className="ms-para">
                Health Care At Home India secures $15 mn from new PE investor ABC World Asia
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy, Madhurima Nandy
                </p>
              </div>
            </div>

            <div className="ms-sectiontwo">
              <div>
                <img src="./Images/msfin.png" alt="money-img" />
              </div>
              <div className="ms-details">
                <h3 className="ms-heading">FINANCE</h3>
                <p className="ms-para">
                Walton Street BlackSoil Real Estate Debt Fund II invests in two housing projects
                </p>
                <p className="ms-sub-para">
                  30 September . Madhurima Nandy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>






      
    </>
  );
}
