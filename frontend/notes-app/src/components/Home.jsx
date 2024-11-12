export const Homepage = ({isRegistered}) => {
    return (
        <div className="flex justify-evenly align-middle">
            {isRegistered ? <h1 className="flex justify-center text-3xl">Successfully Registered</h1> : <h1 className="flex justify-center text-3xl">Welcome to the page !</h1>}
        </div>
    )
}