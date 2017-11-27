import React from "react";

import DiningWide from "../../assets/images/diningwide.jpg";

export default function Home() {
  return (
    <div className="offset-content -large">
      <img
        className="image -full"
        src={DiningWide}
        alt="Phinney Home Interiors Homepage"
      />
    </div>
  );
}
