import React from "react";
import GeoLocator from "./components";

function App() {
  const wikiLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Wikimedia logo"
      viewBox="-599 -599 1198 1198"
      width="42"
      height="42"
    >
      <defs>
        <clipPath id="mask">
          <path d="M 47.5,-87.5 v 425 h -95 v -425 l -552,-552 v 1250 h 1199 v -1250 z" />
        </clipPath>
      </defs>
      <g clip-path="url(#mask)">
        <circle id="green parts" fill="#396" r="336.5" />
        <circle
          id="blue arc"
          fill="none"
          stroke="#069"
          r="480.25"
          stroke-width="135.5"
        />
      </g>
      <circle fill="#900" cy="-379.5" r="184.5" id="red circle" />
    </svg>
  );

  return (
    <div className="App bg-white h-screen">
      <header className="App-header flex flex-row items-center px-5">
        <>{wikiLogo}</>
        <h1 className="font-extrabold mb-5 my-5 px-2 text-gray-900 text-2xl">
          WikiGeoLocator
        </h1>
      </header>
      <main className="">
        <GeoLocator />
      </main>
    </div>
  );
}

export default App;
