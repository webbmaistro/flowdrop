import { Resend } from 'resend';

// Debug: Check if API key is loaded
console.log('🔍 Resend API Key loaded:', process.env.RESEND_API_KEY ? 'YES' : 'NO');
console.log('🔍 API Key starts with:', process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 10) + '...' : 'NOT FOUND');

const resend = new Resend(process.env.RESEND_API_KEY);

export default resend; 