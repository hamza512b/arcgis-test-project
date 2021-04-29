import React, { useEffect, useRef } from "react";

export default function App() {
  const elementRef = useRef();

  useEffect(() => {
    let cleanup;
    import("./utils/initializeArcGis").then(
      (app) => (cleanup = app.initialize(elementRef.current))
    );
    return () => cleanup && cleanup();
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <button className="btn-danger">Remove</button>
      <button className="btn-secondary">Cancel</button>
      <div className="map" ref={elementRef}></div>
    </>
  );
}
