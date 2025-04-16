import {  useState } from "react";
import axios from "axios";

function UploadImages() {
    const [images, setImages] = useState([])

    const handleImageInput = (e) => { 
        setImages(e.target.files[0]);
    }

    console.log(images);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', images); 

        try {
            const res = await axios.post('http://127.0.0.1:8000/upload', formData);
        
              console.log('Upload successful:', res.data);
              alert('Upload successful!');
        
              setImages([]);
        } catch (error) {
            console.error(`something went wrong in Image : ${error}`);

        }
    }


    return (
        <>
            <div className="relative w-full flex justify-center items-center my-12">
                <form action="/upload" onSubmit={handleSubmit} encType="multipart/form-data" className="w-[500px] border-2 border-black p-8">
                    <h1 className="text-4xl text-black text-center text-black m-4">Upload image here</h1>

                    <div>
                        <label htmlFor="image" className="text-lg text-black block text-left">Select an image</label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleImageInput}
                            className="bg-gray-300 w-[420px] px-4 py-2 my-1 block"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-[450px] py-1 bg-blue-800 hover:bg-blue-700 my-4 text-lg font-semibold">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default UploadImages;