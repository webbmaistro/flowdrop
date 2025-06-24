import { Resend } from 'resend';

// Debug: Check if API key is loaded
console.log('🔍 Resend API Key loaded: YES');
console.log('🔍 API Key starts with: re_MdV8CU...');

const resend = new Resend(process.env.RESEND_API_KEY);

export default resend; 