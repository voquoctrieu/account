import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
  Divider,
  IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../layout/Layout';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setError('');
        setIsLoggedIn(true);
        window.location.href = 'https://voquoctrieu.github.io/HueHotelUI/';
      })
      .catch((error) => {
        setError('Email hoặc mật khẩu không đúng!');
      });
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
      window.location.href = '/login';
    });
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' sx={{ mb: 3 }}>
            Đăng nhập
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <label htmlFor='email' style={{ position: 'absolute', left: '-9999px' }}>Email</label>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              autoFocus
              value={formData.email}
              onChange={handleChange}
              InputProps={{ style: { color: '#222' } }}
              FormHelperTextProps={{ style: { color: '#d32f2f' } }}
              sx={{
                '& .MuiInputBase-input::placeholder': { color: '#666', opacity: 1 },
              }}
            />
            <label htmlFor='password' style={{ position: 'absolute', left: '-9999px' }}>Mật khẩu</label>
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Mật khẩu'
              type={showPassword ? 'text' : 'password'}
              id='password'
              autoComplete='current-password'
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                style: { color: '#222' },
                endAdornment: (
                  <IconButton
                    aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    onClick={() => setShowPassword((show) => !show)}
                    edge='end'
                    tabIndex={-1}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              sx={{
                '& .MuiInputBase-input::placeholder': { color: '#666', opacity: 1 },
              }}
            />
            {error && (
              <Typography color='error' sx={{ mt: 1, mb: 1, fontWeight: 500, fontSize: 15, textAlign: 'center', background: '#fff0f0', borderRadius: 1, p: 1 }}>
                {error}
              </Typography>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  name='rememberMe'
                  color='primary'
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
              }
              label='Ghi nhớ đăng nhập'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 3,
                mb: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 8px 2px rgba(33, 203, 243, .18)',
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: 1,
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                  boxShadow: '0 6px 16px 2px rgba(33, 203, 243, .25)',
                },
              }}
            >
              Đăng nhập
            </Button>
            <Box sx={{ mt: 3, mb: 2, width: '100%' }}>
              <Divider sx={{ mb: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  Hoặc đăng nhập bằng
                </Typography>
              </Divider>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <IconButton sx={{ bgcolor: '#3b5998', color: 'white', width: 48, height: 48, transition: '0.2s', '&:hover': { bgcolor: '#2d4373', boxShadow: '0 2px 8px #3b5998' } }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ bgcolor: '#db4437', color: 'white', width: 48, height: 48, transition: '0.2s', '&:hover': { bgcolor: '#a33324', boxShadow: '0 2px 8px #db4437' } }}>
                  <GoogleIcon />
                </IconButton>
                <IconButton sx={{ bgcolor: '#1da1f2', color: 'white', width: 48, height: 48, transition: '0.2s', '&:hover': { bgcolor: '#0d8ddb', boxShadow: '0 2px 8px #1da1f2' } }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Link
                component={RouterLink}
                to='/forgot-password'
                variant='body2'
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Quên mật khẩu?
              </Link>
              <Link
                component={RouterLink}
                to='/signup'
                variant='body2'
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Chưa có tài khoản? Đăng ký
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Login;
