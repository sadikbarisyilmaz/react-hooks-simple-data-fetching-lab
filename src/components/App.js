// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dog, setDog] = useState("");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));

    return () => {};
  }, []);
  console.log(dog);
  return (
    <div>
      {dog === "" ? <p>Loading...</p> : <img src={dog} alt="A Random Dog" />}
    </div>
  );
}

export default App;
