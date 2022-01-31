import { render } from '@testing-library/react';

import Uikit from './uikit';

describe('Uikit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Uikit name={''} />);
    expect(baseElement).toBeTruthy();
  });
});
