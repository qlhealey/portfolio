import { Link } from "react-router-dom";

export default function Summary() {


    return (
        <>
            <div id="main">

                <h1>Final Project Summary</h1>

                <div className="content col-11">

                    <h2>Topic/Purpose:</h2>

                    <p>
                        My planned career field is Stage Management. In the entertainment industry, it is standard to
                        maintain a digital portfolio of your work from past projects, including paperwork and production photos.
                    </p>
                    <p>
                        For this project, I adapted my <a href="https://quinnhealey.com/" target="_blank">current website</a> into a
                        format feasible enough in features and scale to complete by the project deadline.
                    </p>
                    <p>
                        When I initially declared a Web Development minor, I hoped that I would learn enough skills to
                        code a professional portfolio website from the ground up. The content of my final project is a jumping-off
                        point for what will eventually be my new website.
                    </p>

                    <div className="outline">

                        <h2>Website Outline</h2>

                        <p>
                            Users can reach every page of my website through the navigation bar, which has CSS styled to
                            respond when users hover over links and emphasize the page that the user is on. Additionally, 
                            when a user clicks on the logo in the center of the navigation bar, they are brought to the 
                            Summary page.
                        </p>
                        <p>
                            The <Link to='/'>Home</Link> page is a simple website landing that features a production photo from a production in my
                            portfolio, quickly showing users the purpose of my website.
                        </p>
                        <p>
                            The <Link to='/resume'>Resume</Link> page contains an iframe that shows my resume as if it is an image, and features a button that
                            downloads my resume as a PDF when clicked on.
                        </p>
                        <p>
                            The Portfolio dropdown menu features two pages: <Link to='/stage'>Stage Management</Link> and <Link to='/lighting'>Lighting Design</Link>; each page features
                            production photos from entries in my portfolio for their respective creative areas. When a user hovers over
                            each photo, they are able to view the title, date, my role, and the performing arts company from the show.
                        </p>
                        <p>
                            The <Link to='/contact'>Contact</Link> page features a form where users can input their contact information, with 3/4 boxes 
                            required to submit the form. The Email and Phone sections also require users to follow a correct
                            format, refusing to successfully submit until said formatting is valid. 
                        </p>


                    </div>

                    <div className="features">
                        <h2>Features Implemented</h2>

                        <p>Out of the required features, I have implemented the following:</p>

                        <ol>
                            <li>Submittable Form/User Input Validation</li>
                            <ul>
                                <li>In the <Link to='/contact'>Contact</Link> section of my website</li>
                            </ul>
                            <li>React Library</li>
                            <ul>
                                <li>My website was built using <a href="https://reactrouter.com/" target="_blank">React Router</a>, 
                                allowing me to create several pages whilst coding with React. Since my website would not be 
                                effective or easy to read without distinct pages for every section, React Router was a necessity.
                                </li>
                            </ul>
                        </ol>
                    </div>

                </div>



            </div>
        </>
    );
}