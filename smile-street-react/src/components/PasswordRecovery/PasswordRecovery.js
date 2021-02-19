import "./PasswordRecovery.css";
import Button from '@material-ui/core/Button';



function PasswordRecovery() {
  return (      
      <div class="mui-container mui--text-center">
        <div class="mui-panel">
         
            <img src="../images/SmileStreetLogo.png" alt="logo" width="100%" />
            <form class="mui-form">
                <legend>Password Recovery</legend>

              
                <div class="mui-textfield mui-col-xs-12 mui-col-md-12">
                    <input type="email" required placeholder="Enter your email"/>
                </div>
                <div class="mui-textfield mui-col-xs-12 mui-col-md-6">
                    <input type="password" placeholder="Enter New Password"/>
                </div>
                <div class="mui-textfield mui-col-xs-12 mui-col-md-6">
                    <input type="password" placeholder="Confirm New Password"/>
                </div>
                <button type="submit" class="mui-btn mui-btn--raised mui-col-md-12">Reset Password</button>
            </form>
        </div>
    </div>



    


  );
}


export default PasswordRecovery;
