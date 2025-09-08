import React from 'react'
import BlueNote from './BlueNote.jsx'
import PinkNote from './PinkNote.jsx'
import GreenNote from './GreenNote.jsx'
function Container() {
    return (
        <div className='flex flex-col h-[90vh] w-[90vw] bg-amber-50'>
            <BlueNote /> 
            <PinkNote />
            <GreenNote />
        </div>
    )
}

export default Container
