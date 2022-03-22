import React from 'react';
import Layout from "components/layout";
import HeaderSeperate from "components/header/headerSeperate";
import FooterSeperate from "components/footer/footerSeperate";
import classes from './terms.module.css'


const terms = () => {
  return (
    <>
      <HeaderSeperate />
        <div className={classes.body}>
          <h1>Terms and Conditions</h1>
          <p>At Moonbeam Trading Company, we want to make sure you are well guided by our terms and conditions. For you reference, please take the time to review the information below.</p>
          <p>Last Revision: March 9, 2021</p>
        </div>
      <FooterSeperate />
   </>
  )
}

export default terms