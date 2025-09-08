import React, { useState } from 'react'

function BlueNote() {
    const [note, setNote] = useState('');
    
    return (
        <div className='h-[200px] w-[200px] bg-blue-500'>
        <textarea className='h-full w-full resize-none overflow-hidden' placeholder='Type...' value={note} onChange={(e) => setNote(e.target.value)} />
        <p className='text-white text-center'>{note}</p>
        </div>
    )
    
}

export default BlueNote