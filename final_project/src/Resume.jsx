import PageTitle from "./PageTitle";
import Footer from "./Footer";

export default function Resume() {


    return (
        <>
        <PageTitle title="Resume" />
        <div id="main">
            <h1>Resume</h1>
            <p>
                <a href="./files/Quinn_Healey-Artistic_Resume_Fall26.pdf" download target="_blank">
                    <button className="download">Download as PDF</button>
                </a>
            </p>
            <p>
                <iframe src="./files/Quinn_Healey-Artistic_Resume_Fall26.pdf#zoom=60&toolbar=0&navpanes=0&scrollbar=0"
                height="640" width="500">
                </iframe>
            </p>
            </div>
            <Footer />
        </>
    );
}