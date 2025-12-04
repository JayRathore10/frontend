import "./ResetPassword.css";

export function ResetPassword(){
  return (
    <>
    <div className="reset-container">
      <h2>Reset Password</h2>
      <form className="reset-form">
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
    </>
  );
};
