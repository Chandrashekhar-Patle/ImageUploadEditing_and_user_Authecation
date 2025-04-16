import { Link } from "react-router-dom";

function Home() {
    
    return(
        <>
        <div className="relative w-full flex justify-center items-center my-12">
            <h1>Home Page</h1>
            <div>
                <h3>Upload an Image and Edit It</h3>
                <p>Here you can go <span><Link to="/upload">Get Started</Link></span></p>
            </div>
        </div>
        </>
    )
}

export default Home;