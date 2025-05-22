const checkRole = (roles) => {
  return (req, res, next) => {
    // Since we're using Clerk, we'll get the user role from the session
    const userRole = req.auth?.user?.publicMetadata?.role || 'user';
    
    if (!roles.includes(userRole)) {
      return res.status(403).json({ 
        message: 'Access denied. You do not have permission to perform this action.' 
      });
    }
    
    next();
  };
};

module.exports = checkRole; 