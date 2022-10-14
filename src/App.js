import { useEffect, useState } from "react";

const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch("http://localhost:8080/getData").then((res) => res.json()).then((data) => {
      setData(data)
      setLoading(false);
      }
    ).catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData();
  })
  return (
    <div className="App">
      <h1>
        Hello world App
      </h1>
      {
        loading ? <p>Loading Data</p> : <p></p>
      }
    </div>
  );
}

export default App;
