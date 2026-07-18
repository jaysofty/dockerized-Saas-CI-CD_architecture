import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [status, setStatus] = useState("");

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/health")
      .then((res) => {
        setStatus(res.data.status);
      })
      .catch(() => {
        setStatus("Backend Offline");
      });

  }, []);

  return (

    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >

      <h1>FormFlow</h1>

      <h2>Investor Demo</h2>

      <p>

        Backend Status:

        <strong>

          {status}

        </strong>

      </p>

    </div>

  );
}

export default App;