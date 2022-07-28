export default {
  // Suggested for replaceEmptyValueWith: 'N/A' or '-' or ''
  replaceEmptyValueWith: '',
  // Enable authenication
  enableAuthentication: true,
  // List for options for authentication empty array defaults to google
  authEndPoint: ['google'], // authEndPoint: []
};

export const loginRoute = '/login';
export const requestAccessRoute = '/request';
export const adminPortal = '/admin';
export const userProfileRoute = '/profile';
