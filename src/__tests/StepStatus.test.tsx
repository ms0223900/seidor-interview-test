import { render, screen } from '@testing-library/react';
import StepStatus from 'components/Steps/StepStatus';
import { stepTitles } from 'View/StepView/configs';

describe('test StepStatus component', () => {
  it('render step title', () => {
    render(
      <StepStatus stepNow={1} />
    );
    const el = screen.getByText(stepTitles[0]);
    expect(el).toBeInTheDocument();
  });
});
