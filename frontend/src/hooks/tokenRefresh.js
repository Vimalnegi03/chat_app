// import axios from 'axios';
// import toast from 'react-hot-toast';

// // Function to handle token refresh
// const refreshToken = async () => {
//     try {
//         const res = await axios.post('/api/auth/refresh-token');
//         if (res.status === 200) {
//             toast.success('Token refreshed successfully');
//             return true;
//         }
//     } catch (error) {
//         toast.error('Failed to refresh token');
//         return false;
//     }
// };

// // Example of making a protected request with auto-refresh logic
// const fetchProtectedData = async () => {
//     try {
//         const res = await axios.get('/api/protected-route');
//         console.log('Protected data:', res.data);
//     } catch (error) {
//         if (error.response.status === 401) {
//             const refreshed = await refreshToken();
//             if (refreshed) {
//                 // Retry the request after refreshing the token
//                 const res = await axios.get('/api/protected-route');
//                 console.log('Protected data:', res.data);
//             } else {
//                 console.error('Failed to refresh token, please log in again');
//             }
//         } else {
//             console.error('Error fetching protected data:', error);
//         }
//     }
// };
