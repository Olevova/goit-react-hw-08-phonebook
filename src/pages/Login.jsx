import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; // import { useState } from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { postLogin } from 'servise/fetch';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';

export const Login = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handelChange = e => {
    switch (e.target.name) {
      case 'Mail':
        setMail(e.target.value);
        break;
      case 'Password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setMail('');
    setPassword('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(postLogin({ email, password }));
    reset();
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          boxShadow: 1,
          bgcolor: 'rgb(24, 146, 255, 0.1)',
          borderRadius: 2,
          margin: 10,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="emailAddress"
          label="email"
          type="email"
          required
          placeholder="username@beststartupever.com"
          pattern=".+@beststartupever\.com"
          title="Please provide only a Best Startup Ever corporate email address"
          name="Mail"
          variant="filled"
          value={email}
          onChange={handelChange}
        />
        <TextField
          id="filled-basic"
          label="Password"
          type="password"
          name="Password"
          variant="filled"
          value={password}
          onChange={handelChange}
        />
        {email && password ? (
          <Button variant="outlined" type="submit">
            Register
          </Button>
        ) : (
          <Button variant="outlined" type="submit" disabled>
            Register
          </Button>
        )}
      </Box>
    </Container>
  );
};
