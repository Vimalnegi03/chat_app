// import express from 'express';

// import generateTokenAndSetCookie from '../utils/generateToken.js';
// import protectRoute from '../middlewares/protectRoute.js';

// const router = express.Router();

// router.post('/refresh-token', protectRoute, async (req, res) => {
//     try {
//         const userId = req.user._id;

//         // Generate a new token and set it in the cookie
//         generateTokenAndSetCookie(userId, res);

//         res.status(200).json({ message: 'Token refreshed successfully' });
//     } catch (error) {
//         console.error('Error in refresh-token route:', error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// export default router;
