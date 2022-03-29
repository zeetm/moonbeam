import React from "react";
import HeaderSeperate from "components/header/headerSeperate";
import FooterSeperate from "components/footer/footerSeperate";
import SEO from "components/seo";
import classes from "./terms.module.css";
import { Link } from "components/link";

const terms = () => {
  return (
    <>
      <SEO title='Terms and Conditions | Moonbeam Trading Company' description="The terms and conditions page for Moonbeam Trading Company" />
      <HeaderSeperate />
      <div className={classes.body}>
        <div className={classes.container}>
          <h1>Terms and Conditions</h1>
          <p>
            At Moonbeam Trading Company, we want to make sure you are well
            guided by our terms and conditions. For you reference, please take
            the time to review the information below.
          </p>
          <p>Last Revision: March 9, 2021</p>
          <div className={classes.pleaseRead}>
            <h1>
              PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS
              WEBSITE.
            </h1>
            <p>
              The following Terms and Conditions govern and apply to your use of
              or reliance upon this website maintained by Moonbeam Trading
              Company (the “Website”).Your access or use of the website
              indicates that you have read, understand, and agree to be bound by
              these Terms and Conditions and any other applicable laws,
              statutes, and/or regulations. We may change these Terms and
              Conditions at any time without notice, effective upon its posting
              to the Website. Your continued use of the Website will be
              considered your acceptance to the revised Terms and Conditions.
            </p>
          </div>
          <div className={classes.ageRestriction}>
            <h1>AGE RESTRICTION</h1>
            <p>
              You must be at least 18 years of age to use this Website or any
              services contained herein. Your access or use of this Website
              indicates your representation that you are at least 18 years of
              age. We assume no responsibility or liability for any
              misrepresentation of your age.
            </p>
          </div>
          <div className={classes.threeColumn}>
            <div className={classes.intellectualProperty}>
              <h1>INTELLECTUAL PROPERTY</h1>
              <p>
                All intellectual property on the Website (except for
                User-Generated Content, as defined below) is owned by us or our
                licensors, which include materials protected by copyright,
                trademark, or patent laws. All trademarks, service marks, and
                trade names are owned, registered, and/or licensed by us. All
                content on the Website (except for User-Generated Content, as
                defined below), including but not limited to text, software,
                code, designs, graphics, photos, sounds, music, videos,
                applications, interactive features, and all other content is a
                collective work under Canadian and other copyright laws and is
                the proprietary property of the Company; all rights reserved.
              </p>
            </div>
            <div className={classes.companyMaterials}>
              <h1>USE OF COMPANY MATERIALS</h1>
              <p>
                We may provide you with certain information as a result of your
                use of the Website including, but not limited to, documentation,
                data, or information developed by us, and other materials which
                may assist in the use of the Website or Services (‘Company
                Materials’). The Company Materials may not be used for any other
                purpose than the use of this Website and the services offered on
                the Website. Nothing in these Terms of Use may be interpreted as
                granting any license of intellectual property rights to you.
              </p>
            </div>
            <div className={classes.userGenerated}>
              <h1>USER-GENERATED CONTENT</h1>
              <p>
                ‘User-Generated Content’ is communications, materials,
                information, data, opinions, photos, profiles, messages, notes,
                website links, text information, music, videos, designs,
                graphics, sounds, and any other content that you and/or other
                Website users post or otherwise make available on or through the
                Website, except to the extent the content is owned by us.
              </p>
            </div>
          </div>
          <div className={classes.account}>
            <div className={classes.accountCard}>
              <h1>ACCOUNT AND ACCOUNT USE</h1>
              <p>
                If your use of the Website requires an account identifying you
                as a user of the Website (an ‘Account’);
              </p>
              <ul>
                <li>
                  You are solely responsible for your Account and the
                  maintenance, confidentiality, and security of your Account and
                  all passwords related to your Account, and any and all
                  activities that occur under your Account, including all
                  activities of any persons who gain access to your Account with
                  or without your permission;
                </li>
                <li>
                  You agree to immediately notify us of any unauthorized use of
                  your Account, any service provided through your Account or any
                  password related to your Account, or any other breach of
                  security with respect to your Account or any service provided
                  through it, and you agree to provide assistance to us, as
                  requested, to stop or remedy any breach of security related to
                  your Account, and
                </li>
                <li>
                  You agree to provide true, current, accurate, and complete
                  customer information as requested by us from time to time, and
                  you agree to promptly notify us of any changes to this
                  information as required to keep such information held by us
                  current, complete, and accurate.
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.payment}>
            <h1>PAYMENT</h1>
            <p>
              When you make a purchase on this Website, you agree to provide a
              valid instrument to make a payment. Pay attention to the details
              of the transaction, as your total price may include taxes, fees,
              and shipping costs, all of which you are responsible for.
              <br />
              <br />
              When you provide a payment instrument to us, you confirm that you
              are permitted to use that payment instrument. When you make a
              payment, you authorize us (and our designated payment processor)
              to charge the full amount to the payment instrument you designate
              for the transaction. You also authorize us to collect and store
              that funding instrument, along with other related transaction
              information. <br />
              <br />
              If you pay by credit or debit card, we may obtain a pre-approval
              from the issuer of the card for an amount as high as the full
              price. If you cancel a transaction before completion, this
              pre-approval may result in those funds not otherwise being
              immediately available to you. <br />
              <br />
              We may cancel any transaction if we believe the transaction
              violates these Terms, or if we believe doing so may prevent
              financial loss. <br />
              <br />
              In order to prevent financial loss to you or to us, we may contact
              your funding instrument issuer, law enforcement, or affected third
              parties (including other users) and share details of any payments
              you are associated with, if we believe doing so may prevent
              financial loss or a violation of law. <br />
              <br />
              Payment for any ongoing services is billed automatically until
              further notification that you would like to terminate your access
              to the services.
            </p>
          </div>
          <div className={classes.acceptableUse}>
            <div className={classes.acceptableUseTop}>
              <h1>ACCEPTABLE USE</h1>
              <p>
                You agree not to use the Website for any unlawful purpose or any
                purpose prohibited under this clause. <br /> <br />
                You agree not to use the Website in any way that could damage
                the Website, the services or the general business of Moonbeam
                Trading Company.
                <br />
                <br />
                You further agree not to use and/or access the Website:
                <br />
                <br />
              </p>
            </div>
            <div className={classes.acceptableUseBottom}>
              <div className={classes.bottomLeft}>
                <ul>
                  <li>
                    To harass, abuse, or threaten others or otherwise violate
                    any person’s legal right;
                  </li>
                  <li>
                    To violate any intellectual property rights of us or any
                    third party;
                  </li>
                  <li>
                    To upload or otherwise disseminate computer viruses or other
                    software that may damage the property of another;
                  </li>
                  <li>To perpetrate any fraud;</li>
                </ul>
              </div>
              <div className={classes.bottomRight}>
                <ul>
                  <li>
                    To engage in or create any unlawful gambling, sweepstakes,
                    or pyramid scheme;
                  </li>
                  <li>
                    To publish or distribute any obscene or defamatory material;
                  </li>
                  <li>
                    To publish or distribute any material that incites violence,
                    hate, or discrimination towards any group;
                  </li>
                  <li>To unlawfully gather information about others.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.affiliateMarketing}>
            <h1>AFFILIATE MARKETING AND ADVERTISING</h1>
            <p>
              We, through the Website and its services, may engage in affiliate
              marketing, whereby we receive a commission on or percentage of the
              sale of goods or services on or through the Website. We may also
              accept advertising and sponsorships from commercial businesses or
              receive other forms of advertising compensation.
            </p>
          </div>
          <div className={classes.privacyInfo}>
            <h1>PRIVACY INFORMATION</h1>
            <p>
              Through your use of the Website, you may provide us with certain
              information. By using the Website, you authorize us to use your
              information in Canada and any other country where we may operate.
              <br />
              <br />
              When you register for an account, you provide us with a valid
              email address and may provide us with additional information, such
              as your name and/or billing information. Depending on how you use
              our Website, we may also receive information from external
              applications you use to access our Website, or we may receive
              information through various web technologies, such as cookies, log
              files, clear gifs, web beacons, or others.
              <br />
              <br />
              We use the information gathered from you to ensure your continued
              good experience on our website, including through email
              communication. We may also track certain of the passive
              information received to improve our marketing and analytics, and
              for this, we may work with third-party providers.
              <br />
              <br />
              If you would like to disable our access to any passive information
              we receive from the use of various technologies, you may choose to
              disable cookies in your web browser. Please be aware that we will
              receive information about you that you have provided, such as your
              email address.
              <br />
              <br />
              If you choose to terminate your account, we will store information
              about you for a reasonable period of time to be determined by us
              in accordance with applicable federal and provincial laws. After
              this period, all information about you will be deleted.
            </p>
          </div>
          <div className={classes.goodsServices}>
            <h1>SALE OF GOODS/SERVICES</h1>
            <p>
              We may sell goods or services or allow third parties to sell goods
              or services on the Website. We undertake to be as accurate as
              possible with all information regarding the goods and services,
              including product descriptions and images. However, we do not
              guarantee the accuracy or reliability of any product information,
              and you acknowledge and agree that you purchase such products at
              your own risk.
            </p>
          </div>
          <div className={classes.shipping}>
            <h1>SHIPPING/DELIVERY/RETURN POLICY</h1>
            <p>
              You agree to ensure payment for any items you may purchase from
              us, and you acknowledge and affirm that prices are subject to
              change. When purchasing a physical good, you agree to provide us
              with a valid email and shipping address, as well as valid billing
              information. We reserve the right to reject or cancel an order for
              any reason, including errors or omissions in the information you
              provide us. If we do so after payment has been processed, we will
              issue a refund to you in the amount of the purchase price. We also
              may request additional information from you prior to confirming a
              sale, and we reserve the right to place any additional
              restrictions on the sale of any of our products. For the sale of
              physical products, we may pre-authorize your credit or debit card
              at the time you place the order, or we may simply charge your card
              upon shipment. You agree to monitor your method of payment.
              Shipment costs and dates are subject to change from the costs and
              dates you are quoted due to unforeseen circumstances. For any
              questions, concerns, or disputes, you agree to contact us in a
              timely manner at the following:
            </p>
            <a href="mailto:service@moonbeamtrading.ca" target={"_blank"}></a>
          </div>
          <div className={classes.reverseEngineering}>
            <div className={classes.engineeringTop}>
              <h1>REVERSE ENGINEERING AND SECURITY</h1>
              <p>You may not undertake any of the following actions:</p>
            </div>
            <div className={classes.engineeringBottom}>
              <div className={classes.engineeringBottomLeft}>
                <ul>
                  <li>
                    Reverse engineering, or attempt to reverse engineer or
                    disassemble any code or software from or on the Website;
                  </li>
                </ul>
              </div>
              <div className={classes.engineeringBottomRight}>
                <ul>
                  <li>
                    Violate the security of the Website through any unauthorized
                    access, circumvention of encryption or other security tools,
                    data mining, or interference to any host, user network.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.dataLoss}>
            <h1>DATA LOSS</h1>
            <p>
              We are not responsible for the security of your Account or
              Content. Your use of this Website is at your own risk.
            </p>
          </div>
          <div className={classes.threeColumnTwo}>
            <div className={classes.spam}>
              <h1>SPAM POLICY</h1>
              <p>
                You are strictly prohibited from using the Website or any of our
                services for illegal spam activities, including gathering email
                addresses and personal information from others or sending any
                mass commercial emails.
              </p>
            </div>
            <div className={classes.indemnification}>
              <h1>INDEMNIFICATION</h1>
              <p>
                You defend and indemnify Moonbeam Trading Company and any of its
                affiliates and hold us harmless against any and all legal claims
                and demands, including reasonable attorney’s fees, which may
                arise from or relate to your use or misuse of the Website, your
                breach of these Terms and Conditions, or your conduct or
                actions. We will select our own legal counsel and may
                participate in our own defence, if we wish to do so.
              </p>
            </div>
            <div className={classes.variation}>
              <h1>VARIATION</h1>
              <p>
                To the extent any part or sub-part of these Terms and Conditions
                is held ineffective or invalid by any court of law, the prior,
                effective version of these Terms and Conditions is considered
                enforceable and valid to the fullest extent.
              </p>
            </div>
          </div>
          <div className={classes.serviceInterrupt}>
            <h1>SERVICE INTERRUPTIONS</h1>
            <p>
              We may need to interrupt your access to the Website to perform
              maintenance or emergency services on a scheduled or unscheduled
              basis. You agree that your access to the Website may be affected
              by unanticipated or unscheduled downtime, for any reason, but that
              we will have no liability for any damage or loss caused as a
              result of such downtime.
            </p>
          </div>
          <div className={classes.warning}>
            <div className={classes.termination}>
              <h1>TERMINATION OF ACCOUNT</h1>
              <p>
                We may, in our sole discretion, suspend, restrict, or terminate
                your Account and use of the Website, effective at any time,
                without notice to you, for any reason, including because the
                operation or efficiency of the Website or our or any third
                party’s equipment or network is impaired by your use of the
                Website, any amount is past due from you to us, we have received
                a third party complaint which relates to your use or misuse of
                the Website, or you have been or are in breach of any term or
                condition of these Terms and Conditions. We will have no
                responsibility to notify any third party, including any third
                party providers of services, merchandise or information, of any
                suspension, restriction, or termination of your access to the
                Website.
              </p>
            </div>
            <div className={classes.warranties}>
              <h1>
                NO WARRANTIES <br /> <br />{" "}
              </h1>
              <p>
                Your use of the Website is at your sole and exclusive risk, and
                any services provided by us are on an ‘as is’ basis. We disclaim
                any and all express or implied warranties of any kind, including
                but not limited to the implied warranty of fitness for a
                particular purpose and the implied warranty of merchantability.
                We make no warranties that the Website will meet your needs or
                that the Website will be uninterrupted, error-free, or secure.
                We also make no warranties as to the reliability or accuracy of
                any information on the Website or obtained through the Services.
                Any damage that may occur to you, through your computer system,
                or as a result of loss of your data from your use of the Website
                is your sole responsibility, and we are not liable for any such
                damage or loss.
              </p>
            </div>
          </div>
          <div className={classes.limitation}>
            <h1>LIMITATION ON LIABILITY</h1>
            <p>
              We are not liable for any damages that may occur to you as a
              result of your use of the Website, to the fullest extent permitted
              by law. The maximum liability of Moonbeam Trading Company arising
              from your use of the Website is limited to the greater of one
              hundred ($100) Canadian Dollars or the amount you paid to Moonbeam
              Trading Company in the last six (6) months. This applies to any
              and all claims by you, including but not limited to lost profits
              or revenues, consequential or punitive damages, negligence, strict
              liability, fraud, or torts of any kind.
            </p>
          </div>
          <div className={classes.cta}>
            {/* <a>Shop Now!</a> */}
            <Link path="/#online-store" label="Shop Now!"></Link>
          </div>
        </div>
      </div>
      <FooterSeperate />
    </>
  );
};

export default terms;
