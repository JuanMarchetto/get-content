import { useState, useEffect } from "react"

export default function App() {


  useEffect(
    () => {
      fetch(`https://www.clarin.com/`)
        .then(response => console.log(response))
        /*.then(json => {
          console.log(json.results)
        })*/
        .catch(err => console.log(err));
    },
    []
  )
 return <h1>hola</h1>;
  }