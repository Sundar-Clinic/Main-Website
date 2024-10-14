import '@testing-library/jest-dom';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
