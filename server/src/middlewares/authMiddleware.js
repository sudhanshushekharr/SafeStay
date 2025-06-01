import { requireAuth } from '@clerk/express';

export const isAuthenticated = requireAuth({
  onError: (err, req, res) => {
    console.error('Authentication error:', err);
    return res.status(401).json({ success: false, message: 'Authentication failed' });
  }
}); 