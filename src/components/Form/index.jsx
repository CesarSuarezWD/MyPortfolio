import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';
import axios from 'axios';




function Form({children}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // e.currentTarget.submit();

        console.log(firstName, lastName, email, company, message);
        const data = {
          FirstName:firstName,
          LastName:lastName,
          Email:email,
          Company:company,
          Message: message,
          Date: new Date().toLocaleString(),
        }
        axios.post('https://sheet.best/api/sheets/4b15309b-dca1-4f0e-bb68-cfabba122fcf', data).then((response) => {
          console.log(response);
          setFirstName('');
          setLastName('');
          setEmail('');
          setCompany('');
          setMessage('');
        })
      }


    return(

    <div className='App'>
      <Card style={{maxWidth: 450, margin: '10% auto 50% auto', padding: '20px 5px'}}>
        <CardContent>
          <Typography gutterBottom variant='h5'>Let's Talk!</Typography>
          <Typography gutterBottom variant='body2' color='textSecondary' component='p'>Fill up the form and I'll be in touch with you as soon as possible</Typography>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <Grid container spacing={1}>

              <Grid xs={12} sm={6} item>
                <TextField label='First Name' placeholder='Enter your first name' variant='outlined' fullWidth required onChange={(e) => setFirstName(e.target.value)} value={firstName}  />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label='Last Name' placeholder='Enter your last name' variant='outlined' fullWidth required onChange={(e) => setLastName(e.target.value)} value={lastName}  />
              </Grid>
              <Grid xs={12} item>
                <TextField type='email' label='Email' placeholder='Enter your email' variant='outlined' fullWidth required onChange={(e) => setEmail(e.target.value)} value={email}  />
              </Grid>
              <Grid xs={12} item>
                <TextField label='Company' placeholder='Enter your company name' variant='outlined' fullWidth required onChange={(e) => setCompany(e.target.value)} value={company}  />
              </Grid>
              <Grid xs={12} item>
                <TextField label='Message' multiline rows={4}  placeholder='Type your message here' variant='outlined' fullWidth required onChange={(e) => setMessage(e.target.value)} value={message}  />
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant='contained' color='primary' fullWidth >Submit</Button>
              </Grid>
              <Grid xs={12} item>
                {children}
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
    
    )
}

export { Form };