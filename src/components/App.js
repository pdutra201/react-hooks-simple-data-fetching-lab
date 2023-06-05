// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [breeds, setBreeds] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => {
                setBreeds(data.message)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        
        <img src={breeds} alt="A Random Dog"/>

    )    

}

export default App