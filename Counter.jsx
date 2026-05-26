import {useState} from "react"

function Counter() {
  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button> <br></br>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter












//count is state variable and setCount is state setter function.
// setCount is used to update the value of count and render the component with the new value of count.
//useState is components's memory.
//useState (false)
//useState ("Test")
//useState (["red", "green", "blue"])
//useState ({ name: "John", age: 30, city: "New York" })