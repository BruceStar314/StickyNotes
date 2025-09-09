// import React from 'react'
// import BlueNote from './BlueNote.jsx'
// function Container() {
//     const onAddNote = (color) => {
//         console.log(color)
//     }
//     return (
//         <div className='flex flex-col h-[90vh] w-[90vw] bg-amber-50'>
//             <BlueNote onAddNote={onAddNote} /> 
//         </div>
//     )
// }

import BlueNote from './BlueNote.jsx'
function Container () {
    const onAddNote = (color) => {
        console.log(color)
    }
    return (
        <div>
            <BlueNote onAddNote={onAddNote}/>
        </div>
    )
}

export default Container
