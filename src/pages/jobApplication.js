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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState('');
  const [mc, setMc] = useState('');
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    console.log(name, preferredName, message, email, form, mc)

    fetch("https://formsubmit.co/ajax/zeinabtmohamed@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name,
          preferredName,
          email,
          message,
          form,
          mc
      })
  })
      .then(response => response.json())
      .then(data => {
        setEmail('')
        setMessage('')
        setName('')
        setPreferredName('')
        setForm('')
        setMc('')
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
          <div className={classes.form} > First Name:
          <input
            placeholder=""
            type="text"
            id="name"
            sx={styles.input}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Last Name:
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Preferred name (if different from above)
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Pronouns 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Birth-date (MM/DD/YY) 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Are you legally eligible to work in Canada? 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Email: 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Phone number: 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Address: 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Postal code: 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > What is your highest level of education completed? 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Field of study:
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > What are some barriers that you have faced in completing your education? 
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > What are some barriers you have faced in seeking employment?
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Do you identify as?
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > Have you faced periods of life-transitions is your past such as homelessness, drug addiction and/or mental health?
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          <div className={classes.form} > What makes you suitable for this role?
          <input
            placeholder=""
            type="text"
            id="preferredName"
            sx={styles.input}
            value={preferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>



          {/* 
          <input
            placeholder="Email"
            type="email"
            id="email"
            sx={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />  <textarea
            placeholder="Please enter a message"
            id="message"
            sx={styles.input}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          question 1
          <form>
            <textarea
            placeholder="Please enter q1"
            id="q1"
            sx={styles.input}
            value={form}
            onChange={e => setForm(e.target.value)}
            />
          </form>
          <input type ="checkbox" />
          */}
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