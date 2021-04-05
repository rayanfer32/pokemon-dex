import base from './base';

export default process.env.NODE_ENV === 'development'||process.env.NODE_ENV === 'test'?base:base;