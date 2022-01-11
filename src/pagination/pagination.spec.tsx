import {
  render,
  fireEvent,
  screen
} from '@testing-library/preact'

import {StkPagination} from "./pagination";

describe('Pagination', () => {
  describe('Prev Button', () => {
    it('should display previous button placeholder when current page is 1', () => {
      render(<StkPagination onPageChange={() => {}} currentPage={1} totalPages={10} />);
      expect(page.prevButton).toBeNull();
      expect(page.prevPlaceholder).not.toBeNull();
    });

    it('should display previous button when current page is not 1', () => {
      render(<StkPagination onPageChange={() => {}} currentPage={2} totalPages={10} />);
      expect(page.prevButton).not.toBeNull();
      expect(page.prevPlaceholder).toBeNull();
    });

    it('should emit previous page when prev button is clicked', () => {
      const onChange = jest.fn();
      const currentPage = 2;
      render(<StkPagination onPageChange={onChange} currentPage={currentPage} totalPages={10} />);

      fireEvent.click(page.prevButton);
      expect(onChange).toHaveBeenCalledWith(currentPage - 1);
    });
  });

  describe('Next Button', () => {
    it('should display next button placeholder when current page the last page', () => {
      render(<StkPagination onPageChange={() => {}} currentPage={10} totalPages={10} />);
      expect(page.nextButton).toBeNull();
      expect(page.nextPlaceholder).not.toBeNull();
    });

    it('should display next button when current page is not the last page', () => {
      render(<StkPagination onPageChange={() => {}} currentPage={9} totalPages={10} />);
      expect(page.nextButton).not.toBeNull();
      expect(page.nextPlaceholder).toBeNull();
    });

    it('should emit next page when next button is clicked', () => {
      const onChange = jest.fn();
      const currentPage = 2;
      render(<StkPagination onPageChange={onChange} currentPage={currentPage} totalPages={10} />);

      fireEvent.click(page.nextButton);
      expect(onChange).toHaveBeenCalledWith(currentPage + 1);
    });
  });

  describe('Page buttons', () => {

    const testCases = [
      [['1', '2', '3', '…', '20'], 1],
      [['1', '2', '3', '4', '…', '20'], 2],
      [['1', '2', '3', '4', '5', '…', '20'], 3],
      [['1', '2', '3', '4', '5', '6', '…', '20'], 4],
      [['1', '2', '3', '4', '5', '6', '7', '…', '20'], 5],
      [['1', '…', '4', '5', '6', '7', '8', '…', '20'], 6],
      [['1', '…', '5', '6', '7', '8', '9', '…', '20'], 7],
      [['1', '…', '6', '7', '8', '9', '10', '…', '20'], 8],
      [['1', '…', '7', '8', '9', '10', '11', '…', '20'], 9],
      [['1', '…', '8', '9', '10', '11', '12', '…', '20'], 10],
      [['1', '…', '9', '10', '11', '12', '13', '…', '20'], 11],
      [['1', '…', '10', '11', '12', '13', '14', '…', '20'], 12],
      [['1', '…', '11', '12', '13', '14', '15', '…', '20'], 13],
      [['1', '…', '12', '13', '14', '15', '16', '…', '20'], 14],
      [['1', '…', '13', '14', '15', '16', '17', '…', '20'], 15],
      [['1', '…', '14', '15', '16', '17', '18', '19', '20'], 16],
      [['1', '…', '15', '16', '17', '18', '19', '20'], 17],
      [['1', '…', '16', '17', '18', '19', '20'], 18],
      [['1', '…', '17', '18', '19', '20'], 19],
      [['1', '…', '18', '19', '20'], 20],
    ];

    it.each(testCases)('should display %j layout when current page is %d', (expectLayout: string[], currentPage: number) => {
      render(<StkPagination onPageChange={() => {}} currentPage={currentPage} totalPages={20} />);
      expect(page.pageButtonsLayout).toEqual(expectLayout);
    });
  });
});

const page = {
  get prevButton(): HTMLElement {
    return screen.queryByTestId('prev-button')
  },

  get prevPlaceholder(): HTMLElement {
    return screen.queryByTestId('prev-placeholder')
  },

  get nextButton(): HTMLElement {
    return screen.queryByTestId('next-button')
  },

  get nextPlaceholder(): HTMLElement {
    return screen.queryByTestId('next-placeholder')
  },

  get pageButtonsLayout(): string[] {
    return screen.queryAllByTestId('page-button', { exact: false }).map(element => element.textContent)
  }
}
