import React, { Component } from "react";
import SignaturePad from "react-signature-canvas";
import Image from "next/Image";
import Button from "components/CustomButtons/Button.js";

class SignPad extends Component {
  sigPad = {};
  clear = () => {
    this.sigPad.clear();
  };
  trim = () => {
    this.props.setFormState({
      ...this.props.formState,
      Signture: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
    });
  };

  render() {
    return (
      <div className="SignContainer">
        <div className="PadContainer">
          <SignaturePad
            canvasProps={{
              className: "signPad",
              style: {
                width: "100%",
                height: " 100%",
              },
            }}
            ref={ref => {
              this.sigPad = ref;
            }}
          />
        </div>
        <div>
          <Button onClick={this.clear}>Clear</Button>
          <Button onClick={this.trim}>Save</Button>
        </div>
      </div>
    );
  }
}

export default SignPad;
