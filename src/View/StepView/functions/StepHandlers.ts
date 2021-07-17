import routes, { RoutesCheckoutParamsKey } from 'routes/routes';

const StepHandlers = {
  convertParamsToStep(params: RoutesCheckoutParamsKey) {
    switch (params) {
      case 'step-1-my-data':
        return 1;
      case 'step-2-payment':
        return 2;
      case 'step-3-order-confirmation':
        return 3;
      default:
        return 1;
    }
  },
  convertStepToParams(step: number): RoutesCheckoutParamsKey {
    switch (step) {
      case 1:
        return 'step-1-my-data';
      case 2:
        return 'step-2-payment';
      case 3:
        return 'step-3-order-confirmation';
      default:
        return 'step-1-my-data';
    }
  }
};

export default StepHandlers;