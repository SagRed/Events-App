import React from "react";
import Events from "./Events";
import Header from "./Header";


function Home() {

  return (
    <div>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <Events />
      </div>
    </div>
  );
}

export default Home;
