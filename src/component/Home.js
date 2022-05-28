
const Home = () => {

    const handleClick = (e) => {
        console.log("hello,ninjas", e);
    }

    const handleClickAgain = (name) => {
        console.log('clicked ' + name);
    }

    return (
        <div className="Home">
            <h2>Home</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('namo')}>Clickme again</button>
        </div>
    )
}

export default Home;