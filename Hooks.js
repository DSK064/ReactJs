let firstHook=(s)=>{
    const [counter,setCounter] = useState(0);
    function increaseCounter(){
        setCounter(counter+1);
    }
    function decreaseCounter()
    {
        setCounter(counter-1);
    }

    return(
        <div>
            <h2>Counter value:{counter}</h2>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    )
}
