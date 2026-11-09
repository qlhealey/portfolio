import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";

export default function About() {


    return (
        <>

            <PageTitle title="About" />

            <div id="main">

                <h1>About</h1>

                <div className='flex-container bio' id="about">

                    <div className='row'>

                        <div className='section'>
                            <div className='image'>
                                <img className='left'  src="./img/headshot.png" alt="Headshot" />
                            </div>

                            <div className='text'>
                                <p>I'm Quinn Healey, a stage manager, musician, and designer based in Los Angeles.
                                    I'm in my third year at the University of Southern California,
                                    where I will graduate in Spring 2028 with a Bachelor of Fine Arts (B.F.A.)
                                    in Stage Management and a Master of Studies in Law (M.S.L.) in
                                    Business, Media, and Entertainment Law.</p>

                                <p>Most recently, I was the Aspen Chamber Symphony Orchestra Stage Manager
                                    for Aspen Music Festival and School's Summer 2026 season.
                                    Some of my earlier roles in classical music include a Stage Management Internship
                                    at Music@Menlo Chamber Music Festival and Institute and freelance production
                                    work with the Los Angeles Philharmonic.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>

                        <div className='section'>
                            <img width='auto' height='400px' className='right' src="./img/drumline.jpg" alt="Gameday Drumline Photo" />

                            <div className='text'>
                                <p>At USC, I work as an Art Director for Annenberg TV News,
                                    volunteer with the School of Dramatic Arts' Admissions
                                    Office, write for The Sack of Troy, and am an active
                                    member of the Trojan Marching Band Drumline.
                                    I have also done work as a Research Assistant with the
                                    Annenberg Inclusion Initiative, a think tank dedicated to
                                    studying diversity and inclusion in the entertainment industry.</p>

                            </div>
                        </div>

                        <div className='row'>

                            <div className='section'>
                                <img width='auto' height='400px' className='left' src="./img/piano.jpeg" alt="Baby Photo" />

                                <div className='text'>
                                    <p>I was born and raised in the Coal Belt region
                                        of Northeastern Pennsylvania, where I originally
                                        discovered my love for the arts when my parents
                                        enrolled me in piano lessons. Throughout grade school,
                                        I became involved in concert and marching band,
                                        vocal performance, and eventually theatre, where I
                                        stumbled into production when I was asked to be a
                                        spotlight operator during my freshman year of high school.
                                        Since then, I've never looked back.</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>

                            <div className='section'>
                                <img width='auto' height='400px' className='right' src="./img/baby.png" alt="Baby Photo" />

                                <div className='text'>
                                    <p>Despite my passion for theatre and design, music has always been my first love.
                                        Outside of marching band, I'm an avid concertgoer and record collector,
                                        and I still practice piano and am a self-taught electric bassist.
                                        My favorite classical piece is Shostakovich's Piano Trio No. 2 in E minor, Op. 67.</p>

                                    <p>I also code! I designed and built this website myself. This page is already too long,
                                        so if you'd like to hear about my design work, or are still trying to figure out
                                        what my logo is supposed to be, you can find out more <Link to="/design">here</Link>.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}