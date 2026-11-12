import HomeFooter from './HomeFooter';
import PageTitle from './PageTitle';
import './Home.css';

export default function Home() {

    const homeBackground = {
        backgroundImage: "url('./img/home-background.jpg')",
        zIndex: '0',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        marginTop: '-76px',
    }
    


    return (
        <>

                
        <PageTitle title="Home" />

            <div style={homeBackground}>
                <div id='homeMain'>
                    <h1 className="welcome">Welcome!</h1>
                
                </div>
            </div>

            <HomeFooter />

        </>
    );
}