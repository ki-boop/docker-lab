const routeMainDev = '/api/alfaSchool/';
const configMainDev = {
  target: 'http://backend:8000',
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
};
const PROXY_CONFIG_DEV = {
  [routeMainDev]: configMainDev,
};

module.exports = PROXY_CONFIG_DEV;
