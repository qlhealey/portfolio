import PageTitle from "./PageTitle";

import Footer from "./Footer";

export default function Lighting() {


    return (
        <>
            <PageTitle title="Lighting Design" />
            <div id="main">

                <h1>Lighting Design</h1>

                <div id="gallery" className="container-fluid">
                    <div className="row show justify-content-evenly">
                        <div id="show" className="col-md-5 d-flex">
                            <img src="./img/lighting/lk-thumbnail.jpg" alt="The Lion King JR"/>
                                <div id="info">
                                    <h4>The Lion King JR</h4>
                                    <h5>Lighting Designer</h5>
                                    <h5>April 2023</h5>
                                    <h5>Creative + Performing Arts Academy NEPA</h5>
                                </div>
                        </div>
                        <div id="show" className="col-md-5 d-flex">
                            <img src="./img/lighting/shrek-thumbnail.jpg" alt="Shrek the Musical TYA"/>
                                <div id="info">
                                    <h4>Shrek the Musical TYA</h4>
                                    <h5>Associate Lighting Designer</h5>
                                    <h5>March 2023</h5>
                                    <h5>Ritz Storybook Theater</h5>
                                </div>
                        </div>
                    </div>
                    <div className="row show justify-content-evenly">
                        <div id="show" className="col-md-5 d-flex">
                            <img src="./img/lighting/mp-thumbnail.png" alt="Mary Poppins JR"/>
                                <div id="info">
                                    <h4>Mary Poppins JR</h4>
                                    <h5>Lighting Designer</h5>
                                    <h5>February 2023</h5>
                                    <h5>Creative + Performing Arts Academy NEPA</h5>
                                </div>
                        </div>
                        <div id="show" className="col-md-5 d-flex">
                            <img src="./img/lighting/aristocats-thumbnail.jpg" alt="Aristocats KIDS"/>
                                <div id="info">
                                    <h4>Aristocats KIDS</h4>
                                    <h5>Lighting Designer</h5>
                                    <h5>November 2022</h5>
                                    <h5>Creative + Performing Arts Academy NEPA</h5>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}