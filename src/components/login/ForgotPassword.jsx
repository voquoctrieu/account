import { Box, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import Layout from '../layout/Layout';
import { useState } from 'react';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Vui lòng nhập một địa chỉ email hợp lệ.');
      setSent(false);
      return;
    }
    setError('');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Layout>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
          <Typography variant="h5" mb={2} fontWeight={700}>Quên mật khẩu</Typography>
          <Typography mb={2}>Nhập email để nhận hướng dẫn đặt lại mật khẩu.</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              sx={{ mb: 2 }}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              error={!!error}
              helperText={error}
            />
            <Button fullWidth variant="contained" color="primary" type="submit">Gửi yêu cầu</Button>
          </form>
          {sent && (
            <Alert severity="success" sx={{ mt: 2, fontWeight: 500 }}>
              Gửi thành công! Vui lòng kiểm tra email của bạn.
            </Alert>
          )}
        </Paper>
      </Box>
    </Layout>
  );
};

export default ForgotPassword; 