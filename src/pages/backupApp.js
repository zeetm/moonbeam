import React, { useState } from 'react';
import SEO from "components/seo";
import HeaderSeperate from "components/header/headerSeperate";
import FooterSeperate from "components/footer/footerSeperate";
import { Button, Box, Container, Heading, Text } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classes from './jobApplication.module.css'
import { formControlClasses } from '@mui/material';


const jobApplication = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PreferredName, setPreferredName] = useState('');
  const [Pronouns, setPronouns] = useState('');
  const [LegallyEligibleToWork, setLegallyEligibleToWork] = useState({work: ''});
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [PostalCode, setPostalCode] = useState('');
  const [HighestLevelOfEducation, setHighestLevelOfEducation] = useState('');
  const [FieldOfStudy, setFieldOfStudy] = useState('');
  const [BarriersFacedCompletingEducation, setBarriersFacedCompletingEducation] = useState('');
  const [BarriersFacedSeekingEmployment, setBarriersFacedSeekingEmployment] = useState('');
  const [IdentifyAsMemberOfVisibleMinority, setIdentifyAsMemberOfVisibleMinority] = useState('');
  const [PeriodsOfLifeTransitions, setPeriodsOfLifeTransitions] = useState('');
  const [PositionApplyingFor, setPositionApplyingFor] = useState('')
  const [SuitableForThisRole, setSuitableForThisRole] = useState('')

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const[form2, setForm2] =useState({
    country: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    console.log(FirstName, LastName, PreferredName, Pronouns, LegallyEligibleToWork, Email, PhoneNumber, Address, PostalCode, HighestLevelOfEducation, FieldOfStudy, BarriersFacedCompletingEducation, BarriersFacedSeekingEmployment, IdentifyAsMemberOfVisibleMinority, PeriodsOfLifeTransitions, PositionApplyingFor, SuitableForThisRole, form2)

    fetch("https://formsubmit.co/ajax/zeina_16@hotmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          FirstName,
          LastName,
          PreferredName,
          Pronouns,
          LegallyEligibleToWork,
          Email,
          PhoneNumber,
          Address,
          PostalCode,
          HighestLevelOfEducation,
          FieldOfStudy,
          BarriersFacedCompletingEducation,
          BarriersFacedSeekingEmployment,
          IdentifyAsMemberOfVisibleMinority,
          PeriodsOfLifeTransitions,
          PositionApplyingFor,
          SuitableForThisRole,

          form2
      })
  })
      .then(response => response.json())
      .then(data => {
        setFirstName('')
        setLastName('')
        setPreferredName('')
        setPronouns('')
        setLegallyEligibleToWork('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')
        setPostalCode('')
        setHighestLevelOfEducation('')
        setFieldOfStudy('')
        setBarriersFacedCompletingEducation('')
        setBarriersFacedSeekingEmployment('')
        setIdentifyAsMemberOfVisibleMinority('')
        setPeriodsOfLifeTransitions('')
        setPositionApplyingFor('')
        setSuitableForThisRole('')


        setForm2
        setLoading(false)
        setSent(true)
        setTimeout(() => {
          setSent(false)
        }, 15000)
        console.log(data)
      })
      .catch(error => console.log(error));

  }


  return (
    <>
      <HeaderSeperate/>
      <SEO title="Application" />

      <Box as="section" sx={styles.subscribe} className={classes.wrapper} id='contact'>
      <Container>
        <Heading as="h3">Thank you for applying to Moonbeam trading company. We want to hear your story. Please take a few moments to reflect and complete this form. </Heading>
        <Text as="p" className={classes.white}> If you are having trouble viewing this form, you can fill out the PDF form here and email it to example@example.com </Text>
        <Box as="form" sx={styles.form} className={classes.form} onSubmit={handleSubmit} action={'moonbeamtradingco@gmail.com'}>
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Please fill out the application below 
          </Box>


          <label>
            Country:
            <select onChange={e => setForm2(e.target.value)} name ="country">
              <option value="us">U.S</option>
              <option value="canada">Canada</option>             
              <option value="Mexico">Mexico</option>
              <option value="Russia">Russia</option>              
              <option value="Ukraine">Ukraine</option>
            </select>
          </label>


          <div className={classes.form} > First Name:
          <input
            placeholder=""
            type="text"
            id="FirstName"
            sx={styles.input}
            value={FirstName}
            onChange={e => setFirstName(e.target.value)}
          />
          </div>

          <div className={classes.form} > Last Name:
          <input
            placeholder=""
            type="text"
            id="LastName"
            sx={styles.input}
            value={LastName}
            onChange={e => setLastName(e.target.value)}
          />
          </div>

          <div className={classes.form} > Preferred name (if different from above)
          <input
            placeholder=""
            type="text"
            id="PreferredName"
            sx={styles.input}
            value={PreferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          
          <div className={classes.form} > Pronouns 
          <input
            placeholder=""
            type="text"
            id="Pronouns"
            sx={styles.input}
            value={Pronouns}
            onChange={e => setPronouns(e.target.value)}
          />
          </div>

          <label className={classes.form}> Are you legally eligible to work in Canada?
            <select 
            onChange={e => setLegallyEligibleToWork(e.target.value)} 
            name ="work"
            sx={styles.input}
            value={LegallyEligibleToWork}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>             
            </select>
          </label>

          <div className={classes.form} > Email: 
          <input
            placeholder=""
            type="text"
            id="Email"
            sx={styles.input}
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />
          </div>

          <div className={classes.form} > Phone number: 
          <input
            placeholder=""
            type="text"
            id="PhoneNumber"
            sx={styles.input}
            value={PhoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          </div>

          <div className={classes.form} > Address: 
          <input
            placeholder=""
            type="text"
            id="Address"
            sx={styles.input}
            value={Address}
            onChange={e => setAddress(e.target.value)}
          />
          </div>

          <div className={classes.form} > Postal code: 
          <input
            placeholder=""
            type="text"
            id="PostalCode"
            sx={styles.input}
            value={PostalCode}
            onChange={e => setPostalCode(e.target.value)}
          />
          </div>

          <div className={classes.form} > What is your highest level of education completed? 
          <input
            placeholder=""
            type="text"
            id="HighestLevelOfEducation"
            sx={styles.input}
            value={HighestLevelOfEducation}
            onChange={e => setHighestLevelOfEducation(e.target.value)}
          />
          </div>

          <div className={classes.form} > Field of study:
          <input
            placeholder=""
            type="text"
            id="FieldOfStudy"
            sx={styles.input}
            value={FieldOfStudy}
            onChange={e => setFieldOfStudy(e.target.value)}
          />
          </div>

          <div className={classes.form} > What are some barriers that you have faced in completing your education? 
          <input
            placeholder=""
            type="text"
            id="BarriersFacedCompletingEducation"
            sx={styles.input}
            value={BarriersFacedCompletingEducation}
            onChange={e => setBarriersFacedCompletingEducation(e.target.value)}
          />
          </div>

          <div className={classes.form} > What are some barriers you have faced in seeking employment?
          <input
            placeholder=""
            type="text"
            id="BarriersFacedSeekingEmployment"
            sx={styles.input}
            value={BarriersFacedSeekingEmployment}
            onChange={e => setBarriersFacedSeekingEmployment(e.target.value)}
          />
          </div>
          
          <div className={classes.form} > Do you identify as a member of a visible minority?
          <input
            placeholder=""
            type="text"
            id="IdentifyAsMemberOfVisibleMinority"
            sx={styles.input}
            value={IdentifyAsMemberOfVisibleMinority}
            onChange={e => setIdentifyAsMemberOfVisibleMinority(e.target.value)}
          />
          </div>

          <div className={classes.form} > Have you faced periods of life-transitions such as homelessness, drug addiction and/or mental health?
          <input
            placeholder=""
            type="text"
            id="PeriodsOfLifeTransitions"
            sx={styles.input}
            value={PeriodsOfLifeTransitions}
            onChange={e => setPeriodsOfLifeTransitions(e.target.value)}
          />
          </div>

          <div className={classes.form} > Which position(s) are you applying for?
          <input
            placeholder=""
            type="text"
            id="PositionsApplyingFor"
            sx={styles.input}
            value={PositionApplyingFor}
            onChange={e => setPositionApplyingFor(e.target.value)}
          />
          </div>

          <div className={classes.form} > What makes you suitable for this role?
          <input
            placeholder=""
            type="text"
            id="SuitableForThisRole"
            sx={styles.input}
            value={SuitableForThisRole}
            onChange={e => setSuitableForThisRole(e.target.value)}
          />
          </div>


          <Button type="submit" sx={styles.button}>
            {!loading ? `APPLY NOW!` : <FontAwesomeIcon icon={faSpinner} className={classes.spinner} />}
          </Button>
         {sent && <div className={classes.sent}>Sent Successfully!<FontAwesomeIcon icon={faCheck} /></div>}
        </Box>
      </Container>
      </Box>

      <FooterSeperate/>
    </>    
)}

export default jobApplication;

const styles = {
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    backgroundColor: '#0F9FBFD',
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#020718',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px'],
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      //width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
      color: '#020718',
    },
  },
  /*
  form: {
    mx: ['auto'],
    display: ['flex'],
    flexDirection: ['column'],
    justifyContent: ['space-between'],
    alignItems: ['left'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, ',60px'],
    backgroundColor: 'white',
    borderRadius: '8px'
  },*/
  input: {
    width: ['100%'],
    maxWidth: ['80%', '80%', '80%', '80%'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    mt: ['8px', null, null, '8px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'left'],
  },
  button: {
    backgroundColor: '#0c79be',
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    maxWidth: '80%',
    color: '#020718',
    letterSpacing: '-0.5px',
    outline: 'none',
    padding: ['0px 30.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: '24px',
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#86a28c',
      opacity: '0.8',
    },
  },
};