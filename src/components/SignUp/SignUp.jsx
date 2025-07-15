import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  Avatar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../layout/Layout';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'agreeToTerms' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <Container component='main' maxWidth='xs'>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' sx={{ mb: 3 }}>
            Đăng ký
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='name'
              label='Họ và tên'
              name='name'
              autoComplete='name'
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='phone'
              label='Số điện thoại'
              name='phone'
              autoComplete='tel'
              value={formData.phone}
              onChange={handleChange}
              inputProps={{
                pattern: '[0-9]*',
                maxLength: 10,
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Mật khẩu'
              type='password'
              id='password'
              autoComplete='new-password'
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='confirmPassword'
              label='Xác nhận mật khẩu'
              type='password'
              id='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name='agreeToTerms'
                  color='primary'
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
              }
              label={
                <Typography variant='body2'>
                  Tôi đồng ý với{' '}
                  <Link component={RouterLink} to='/terms' color='primary'>
                    Điều khoản dịch vụ
                  </Link>
                </Typography>
              }
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 3,
                mb: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
              }}
            >
              Đăng ký
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to='/login'
                variant='body2'
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Đã có tài khoản? Đăng nhập
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default SignUp;
