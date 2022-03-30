import React, { useState } from 'react';
import classes from './stay-connected.module.css'
import { Button, Input, Box, Container, Heading, Text } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";


const StayConected = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    console.log(name, message, email)

    fetch("https://formsubmit.co/ajax/mark.mcdonald@moonbeamtrading.ca", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name,
          email,
          message
      })
  })
      .then(response => response.json())
      .then(data => {
        setEmail('')
        setMessage('')
        setName('')
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
    <Box as="section" sx={styles.subscribe} className={classes.wrapper} id='connected'>
      <Container>
        <Box as="form" sx={styles.form} className={classes.form} onSubmit={handleSubmit} action={'mark.mcdonald@moonbeamtrading.ca'}>
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Stay Connected
          </Box>
            <Text as="p">
              Stay connected with everything Moonbeam
            </Text>
          <input
            placeholder="Name"
            type="text"
            id="name"
            sx={styles.input}
            value={name}
            onChange={e => setName(e.target.value)}
          />
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
          <Button type="submit" sx={styles.button}>
            {!loading ? `Connect` : <FontAwesomeIcon icon={faSpinner} className={classes.spinner} />}
          </Button>
         {sent && <div className={classes.sent}>Sent Successfully!<FontAwesomeIcon icon={faCheck} /></div>}
        </Box>
      </Container>
    </Box>
  );
};

export default StayConected;

const styles = {
  subscribe: {
    py: ['48px', null, null, null, '64px', '80px', '124px'],
    backgroundColor: '#0c79be',
    opacity: 0.8,
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
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
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },
  },
  form: {
    mx: ['auto'],
    display: ['flex'],
    flexDirection: ['column'],
    justifyContent: ['space-between'],
    alignItems: ['center'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, ',60px'],
    backgroundColor: 'white',
    borderRadius: '8px'
  },
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
    backgroundColor: '#86a28c',
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
      backgroundColor: '#0c79be',
      opacity: '0.8',
    },
  },
};
