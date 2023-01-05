import React from "react";
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'


const Login = () => {
 

  return (
    <div className={styles.loginPage}>
      <p className={styles.text}>Login to access this app</p>
      <WalletMultiButton />
    </div>
  );
};

export default Login;

const styles = {
  loginPage: `w-screen h-screen bg-white flex justify-center flex-col items-center`,
  text: `text-4xl text-black mb-10`,
};
