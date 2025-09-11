import BlueNote from "./BlueNote";
import { useState } from "react";
function Container() {
    const [notes, setNotes] = useState([])
    return (
        <>
        <div className="flex justify-center items-start h-screen w-screen mt-14">
            <BlueNote onAddNote={note => setNotes([...notes, note])}/>
            <div className='flex  h-[70vh] w-[75vw] bg-white rounded-2xl ml-5'>
                {notes.map((note, index) => (
                    <div key={index} className='flex h-20 w-20 bg-blue-400 cursor-pointer rounded-sm'></div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Container
