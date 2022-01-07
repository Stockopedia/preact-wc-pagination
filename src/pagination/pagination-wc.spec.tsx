import { expect } from 'expect';
import { h } from 'preact';
import { render, fireEvent, screen } from '@testing-library/preact';

import { StkPaginationWC } from './pagination-wc'

describe('Pagination Web Component', () => {
  test('should display pagination', () => {
    const { container } = render(<StkPaginationWC totalPages={1} currentPage={1} />);
    expect(container.textContent).toMatch('1');
  })
});
