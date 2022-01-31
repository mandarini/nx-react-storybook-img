import { render } from '@testing-library/react';
import Second from './second';
describe('Second', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Second />);
    expect(baseElement).toBeTruthy();
  });
});
