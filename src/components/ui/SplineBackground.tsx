"use client";

import React from "react";

export function SplineBackground() {
  return (
    <div className="spline-container absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 w-[150%] h-full -left-[25%]">
        <iframe
          src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7"
          frameBorder="0"
          width="100%"
          height="100%"
          id="aura-spline"
          style={{ border: "none", filter: "grayscale(100%)" }}
        />
      </div>
    </div>
  );
}

export default SplineBackground;

