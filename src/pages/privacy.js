import React from 'react';
import HeaderSeperate from "components/header/headerSeperate";
import FooterSeperate from "components/footer/footerSeperate";
import classes from './privacy.module.css';
import { Box } from "theme-ui";


const privacy = () => {
  return (
    <>
      <HeaderSeperate/>
        <Box>

        <div className={classes.body}>
          <h1>Privacy Policy</h1>
          <h2>LAST UPDATE OF THIS PRIVACY POLICY - March 9, 2021</h2>
          <p>This Privacy Policy is applicable to Moonbeam Trading Company ("Company") and sets out our policy on the gathering and use of information on this site and our other sites (collectively "Sites"). The Company is committed to providing safe web sites for visitors of all ages and has implemented this Privacy Policy to demonstrate our firm commitment to your privacy. The Company complies with Canadian Federal and Provincial privacy laws and regulations including the Personal Information and Electronic Documents Act.</p>
          <p>There may be links from our Sites to other web sites; note that this Privacy Policy applies only to our Sites and not to web sites of other companies or organizations to which our Sites may be linked. You must check on any linked sites for the privacy policy that applies to that site and/or make any necessary inquiries in respect of that privacy policy with the operator of the linked site. These links to third party websites are provided as a convenience and are for informational purposes only. The Company does not endorse, and is not responsible for, these linked websites.</p>
          <p>Although you are not required to register to access our Sites, you may be asked to provide us with personal information when you visit certain sections of our Sites. Your use of our Sites signifies your acknowledgement and consent to our Privacy Policy. If you do not agree to this Privacy Policy, please do not continue to use our Sites. Your continued use of the Sites signifies your acceptance of these terms and any changes in effect at the time of use.</p>
        </div>
        </Box>
      <FooterSeperate/>
    </>
  )
}

export default privacy