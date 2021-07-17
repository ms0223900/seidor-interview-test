export type RoutesCheckoutParamsKey = 
  'step-1-my-data' |
  'step-2-payment' | 
  'step-3-order-confirmation'

const routes = {
  checkout: {
    'step-1-my-data': 'step-1-my-data',
    'step-2-payment': 'step-2-payment',
    'step-3-order-confirmation': 'step-3-order-confirmation',
  }
};

export default routes;