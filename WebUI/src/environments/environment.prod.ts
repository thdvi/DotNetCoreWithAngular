const RootUrl = 'http://localhost:65272';

const ServiceConfig = {
  ODataRootUrl: RootUrl + '/odata',
  IterationQuantity: 15,
  LargeIterationThreshold: 1000,
  LargeIterationQuantity: 5000
};


export const environment = {
  production: true,
  ServiceConfig: ServiceConfig
};
