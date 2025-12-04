import "./ForgetPassword.css";

export function ForgetPassword(){
  return (
    <>
    <div className="forget-container">
      <h2>Enter your email to reset password</h2>
      <form className="forget-form">
        <input type="email" placeholder="Email" />
        <button type="submit">Send OTP</button>
      </form>
    </div>
    </>
  );
};
