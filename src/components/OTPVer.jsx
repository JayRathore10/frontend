import "./OTPVer.css";

export function OtpVer(){
  return (
    <>
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form className="otp-form">
        <input type="text" placeholder="Enter OTP" />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
    </>
  );
};

