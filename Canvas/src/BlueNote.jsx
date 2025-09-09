function Palette({ onAddNote }) {
    return (
        <div className="flex gap-1 mb-1">
            <textarea onClick={() => onAddNote("lightblue")} className='w-24 h-24 bg-blue-400 cursor-pointer rounded-sm'></textarea>
        </div>
    )

}

  export default Palette