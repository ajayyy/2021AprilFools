import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" overwriteTitle="SponsorBlock - Skip over YouTube Sponsors - Sponsorship Skipper" />

            <div className="title">
                <img
                    src="/LogoSponsorBlockerMoney.png"
                    alt="Logo"
                />

                <span style={{ color: "white" }}>NFT + SponsorBlock</span>
            </div>

            <div className="container">
                <div className="">

                    <p>
                        Starting today, SponsorBlock is partnering with all major NFT gateways to allow
                        you to easily sell your submitted segments as NFTs
                    </p>

                    <img src="/nft.png" alt="An example of a low-valued submission" style={{float: "left", padding: "10px", width: "50%"}} />

                    <p>
                        Own part of history, and buy the most valuable submission
                    </p>

                    <p>
                        The future is now
                    </p>

                    <br/>

                    <p style={{float: "left"}}>
                        Rest easy, with detailed statistics of exactly how your POW transactions affect the planet
                    </p>

                    <img src="/trees.png" alt="An example of a low-valued submission" />

                    <p>
                        75% of the proceeds from each NFT purchase will be given to the developers of SponsorBlock
                    </p>

                    <a href="https://www.youtube.com/watch?v=jzwMjOl8Iyo" alt="2021 April Fools">Start selling your submissions today</a>

                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
