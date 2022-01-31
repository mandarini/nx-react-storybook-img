import { render } from '@testing-library/react';

import Third from './third';

describe('Third', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Third />);
    expect(baseElement).toBeTruthy();
  });
});
