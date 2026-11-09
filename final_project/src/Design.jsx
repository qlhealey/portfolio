import Footer from "./Footer";
import PageTitle from "./PageTitle";

export default function Design() {


    return (
        <>

<PageTitle title="Design" />


        <div id="main">
            <h1>Design</h1>

            <div id="gallery" className="container-fluid">
                <div className="row show">
                    <div id="show" className="col-md-4 d-flex">
                        <img id="thumbnail" src="./img/stage/bs-thumbnail.jpg" alt="Blue Stockings"/>
                            <div id="info">
                                <h4>Blue Stockings</h4>
                                <h5>Assistant Stage Manager</h5>
                                <h5>March 2025</h5>
                                <h5>University of Southern California</h5>
                            </div>
                    </div>
                    <div id="show" className="col-md-4 d-flex">
                        <img id="thumbnail" src="./img/stage/ms-thumbnail.jpg" alt="Marat/Sade"/>
                            <div id="info">
                                <h4>Marat/Sade</h4>
                                <h5>Assistant Stage Manager</h5>
                                <h5>October 2024</h5>
                                <h5>University of Southern California</h5>
                            </div>
                    </div>
                    <div id="show" className="col-md-4 d-flex">
                        <img id="thumbnail" src="./img/stage/acl-thumbnail.jpg" alt="A Chorus Line"/>
                            <div id="info">
                                <h4>A Chorus Line</h4>
                                <h5>Assistant Stage Manager</h5>
                                <h5>June 2023</h5>
                                <h5>Southeastern Summer Theatre Institute</h5>
                            </div>
                    </div>
                </div>
                <div className="row show">
                    <div id="show" className="col-md-4 d-flex">
                        <img id="thumbnail" src="./img/stage/frozen-thumbnail.jpg" alt="Frozen KIDS"/>
                            <div id="info">
                                <h4>Frozen KIDS</h4>
                                <h5>Production Stage Manager</h5>
                                <h5>February 2023</h5>
                                <h5>Creative + Performing Arts Academy NEPA</h5>
                            </div>
                    </div>
                    <div id="show" className="col-md-4 d-flex">
                        <img id="thumbnail" src="./img/stage/cb-thumbnail.jpg" alt="A Charlie Brown Christmas"/>
                            <div id="info">
                                <h4>A Charlie Brown Christmas</h4>
                                <h5>Production Stage Manager</h5>
                                <h5>December 2022</h5>
                                <h5>Ritz Storybook Theater</h5>
                            </div>
                    </div>
                    <div id="show" className="col-md-4 d-flex">
                        <img id="thumbnail" src="./img/stage/spookley-thumbnail.jpg" alt="Spookley the Square Pumpkin"/>
                            <div id="info">
                                <h4>Spookley the Square Pumpkin</h4>
                                <h5>Production Stage Manager</h5>
                                <h5>October 2022</h5>
                                <h5>Ritz Storybook Theater</h5>
                            </div>
                    </div>
                </div>

            </div>
            </div>
            <Footer />
        </>
    );
}