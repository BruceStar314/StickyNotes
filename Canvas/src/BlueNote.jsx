function Palette({ onAddNote }) {
    const [color, setColor] = useState('lightblue')
    return (
        <div className="flex gap-1 mb-1">
            <textarea onClick={() => onAddNote(color)} className='w-20 h-20 bg-blue-400 cursor-pointer rounded-sm'></textarea>
        </div>
    )
}
export default Palette