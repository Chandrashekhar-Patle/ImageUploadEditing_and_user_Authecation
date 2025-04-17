import { useState } from "react";


function ImagePreview({image}) {
    const [showEditor, setShowEditor] = useState(false)
    return(
        <>
        <div className="mt-6">
              <img src={image} alt="Preview" className="w-64 h-auto mb-4" />
              <button
                onClick={() => setShowEditor(true)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Edit Image
              </button>
        </div>
        </>
    )
}

export default ImagePreview;