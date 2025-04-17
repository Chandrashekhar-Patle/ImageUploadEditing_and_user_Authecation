import { useState } from "react";
import axios from "axios";
import ImageEditor from "./ImageEditor";

function UploadImages() {
    const [images, setImages] = useState(null)
    const [imagePath, setImagePath] = useState(null);
    const [showEditor, setShowEditor] = useState(false);

    const handleImageInput = (e) => {
        setImages(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', images);

        try {
            const res = await axios.post('http://127.0.0.1:8000/upload', formData);
            setImagePath(`http://127.0.0.1:8000/${res.data.filePath}`);
            setShowEditor(false);

            console.log('Upload successful:', res.data);
            alert('Upload successful!');

            setImages([]);
        } catch (error) {
            console.error(`something went wrong in Image : ${error}`);

        }
    }

    const handleEdit = () => {
        if (!imagePath) return alert("Please upload an image first");
        setShowEditor(true);
    };

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
                        Upload
                    </button>
                </form>



            </div>

            <div className="flex flex-col justify-around items-center">
                {imagePath && (
                    <>
                        <img
                            src={imagePath}
                            alt="Uploaded preview"
                            className="w-[400px] h-[300px] object-contain border rounded shadow"
                        />

                        <button
                            onClick={handleEdit}
                            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
                        >
                            Edit Image
                        </button>
                    </>
                )}
            </div>


            <div>
                {showEditor && <ImageEditor imagePath={`http://127.0.0.1:8000/upload/${imagePath}`} />}
            </div>

        </>
    )
}

export default UploadImages;