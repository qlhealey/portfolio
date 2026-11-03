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

            <div style={homeBackground}>
                
                    <h1 className="welcome">Welcome!</h1>
                
            </div>

        </>
    );
}