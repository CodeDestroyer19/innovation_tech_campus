import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.3470958654307!2d29.216895966873352!3d-25.877214436219354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaed2c34c368e7%3A0x701e0a956c824441!2sINNOVATION%20TECHNOLOGY%20CAMPUS!5e0!3m2!1sen!2sza!4v1630413130988!5m2!1sen!2sza"
        allowFullscreen={true}
        id="mapLoc"
        style={{
          border: "0px",
          width: "100%",
          height: "100%",
          flexGrow: 1,
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default Map;
