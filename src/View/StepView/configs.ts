import routes from 'routes/routes';

export const stepTitles = [
  'My Data', 'Payment'
];

export const checkoutRoutesMappginSteps = {
  [routes.checkout['step-1-my-data']]: 1,
  [routes.checkout['step-2-payment']]: 2,
  [routes.checkout['step-3-order-confirmation']]: 3,
};