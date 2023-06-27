import React from "react";

function Left() {
    return (
        <div className="main">
            <div className="left">
                <h1>Website is under <span>construction</span>!</h1>
                <p>Secure your spot and be the first to
                    experience our exciting things by pre-registering through the following link!  </p>
                <button className="btn btn-outline">REGISTER</button>

                <h3>Or scan the following QR to Pre-Register.</h3>
                <div className="box">
                    <h4>Pre-register now!</h4>
                    <img src="images/Qr-code.png" alt="qr" />
                </div>
            </div>

            <div className="right">
                <img src="images/pana.png" />
            </div>
        </div>
    )
}

export default Left;