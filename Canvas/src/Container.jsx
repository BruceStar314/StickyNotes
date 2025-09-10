import BlueNote from "./BlueNote";
function Container() {
    return (
        <>
        <div className="flex justify-center items-start h-screen w-screen mt-14">
            <BlueNote/>
            <div className='flex  h-[70vh] w-[75vw] bg-white rounded-2xl ml-5'>
                <p className='text-gray-400'>Click the blue box to add a note</p>
            </div>
        </div>
        </>
    )
}

export default Container
