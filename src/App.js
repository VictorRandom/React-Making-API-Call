import React, { useState, useEffect } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})
    
    // side effects
    useEffect(function(){
      console.log("Component rendered")
      
      fetch("https://swapi.dev/api/people/1")
          .then(res => res.json())
          .then(data => setStarWarsData(data))
    }, [])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
