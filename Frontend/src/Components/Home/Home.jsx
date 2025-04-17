import { Link } from "react-router-dom";
import imageUploader from "../../assets/imageUploader.jpeg";
function Home() {

    return (
        <>
            <div className="relative w-full flex flex-col justify-center items-center my-12">
                <div className="flex justify-between w-[60%] h-[400px] shadow-sm shadow-black">
                    <div className="p-8">
                        <h1 className="text-4xl text-black font-black py-4">Image uploader and boundary detection</h1>
                        <h3 className="text-2xl text-black font-semibold py-4">Upload an Image and Edit It</h3>
                        <p className="text-xl text-black py-4">Here you can go </p>
                        <button className="p-2 border-1 border-black bg-black text-white rounded"><Link to="/upload">Get Started</Link></button>
                    </div>

                    <div>
                        <img src={imageUploader} alt="Images uploader" className="w-[800px] h-[100%]"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;