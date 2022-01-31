import { render } from '@testing-library/react';

import Fourth from './fourth';

describe('Fourth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fourth />);
    expect(baseElement).toBeTruthy();
  });
});
