import React from 'react'
import HeaderSeperate from "components/header/headerSeperate";
import FooterSeperate from "components/footer/footerSeperate";
import classes from './privacy.module.css'


const privacy = () => {
  return (
    <>
      <HeaderSeperate/>
        <div className={classes.body}>
          <h1>Privacy Policy</h1>
          <h2>LAST UPDATE OF THIS PRIVACY POLICY - March 9, 2021</h2>
          <p>This Privacy Policy is applicable to Moonbeam Trading Company ("Company") and sets out our policy on the gathering and use of information on this site and our other sites (collectively "Sites"). The Company is committed to providing safe web sites for visitors of all ages and has implemented this Privacy Policy to demonstrate our firm commitment to your privacy. The Company complies with Canadian Federal and Provincial privacy laws and regulations including the Personal Information and Electronic Documents Act.</p>
        </div>
      <FooterSeperate/>
    </>
  )
}

export default privacy