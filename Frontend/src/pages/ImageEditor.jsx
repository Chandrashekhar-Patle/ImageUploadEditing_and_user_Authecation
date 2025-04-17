import { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';

function ImageEditor({ imagePath }) {
    const canvasRef = useRef(null);
    const [activeObject, setActiveObject] = useState(null);

    console.log("Image Editor ", imagePath);


    useEffect(() => {
        const canvas = new fabric.Canvas('canvas', {
            width: 800,
            height: 600,
            backgroundColor: '#f0f0f0',
        });


        fabric.Image.fromURL(imagePath, (img) => {
            img.set({ selectable: false });
            img.scaleToWidth(800);
            canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
        });


        canvas.on('selection:created', (e) => {
            setActiveObject(e.target);
        });

        canvas.on('selection:updated', (e) => {
            setActiveObject(e.target);
        });

        canvasRef.current = canvas;


        return () => {
            canvas.dispose();
        };
    }, [imagePath]);

    const addRectangle = () => {
        const canvas = canvasRef.current;
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'rgba(0, 150, 255, 0.3)',
            width: 150,
            height: 100,
            stroke: 'blue',
            strokeWidth: 2,
            hasControls: true,
        });
        canvas.add(rect);
    };

    const deleteSelected = () => {
        const canvas = canvasRef.current;
        if (activeObject) {
            canvas.remove(activeObject);
            setActiveObject(null);
        }
    };

    const saveCanvas = () => {
        const canvas = canvasRef.current;
        const json = canvas.toJSON();
        console.log("🔧 Saved canvas data:", json);
        alert("Canvas boundaries saved! Check console.");
    };

    return (
        <div className="flex flex-col gap-4 justify-center items-center my-8">
            <h1 className='text-4xl text-black text-center font-black m-4'>Editing Tools</h1>

            <div className='flex justify-evely '>
                <canvas id="canvas" className="border border-gray-400 rounded shadow-md w-[400px] h-[400px]"></canvas>

                <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded shadow-md w-60">
                    <h2 className="text-lg font-bold mb-2">🛠 Tools</h2>

                    <button
                        onClick={addRectangle}
                        className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
                    >
                        Add Rectangle
                    </button>

                    <button
                        onClick={deleteSelected}
                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                    >
                        Delete Selected
                    </button>

                    <button
                        onClick={saveCanvas}
                        className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
                    >
                        Save Boundaries
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ImageEditor;
