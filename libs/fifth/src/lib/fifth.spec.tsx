import { render } from '@testing-library/react';

import Fifth from './fifth';

describe('Fifth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fifth />);
    expect(baseElement).toBeTruthy();
  });
});
