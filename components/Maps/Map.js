import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d459623.36061251623!2d28.43737835211575!3d-25.842887615957938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-25.7394881!2d28.217574!4m5!1s0x1eeaed2c34c368e7%3A0x701e0a956c824441!2sinnovation%20technology%20campus%20in%20witbank!3m2!1d-25.8759335!2d29.2166079!5e0!3m2!1sen!2sza!4v1630168867581!5m2!1sen!2sza"
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
