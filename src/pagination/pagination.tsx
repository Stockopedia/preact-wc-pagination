import classNames from 'classnames'
import {Fragment} from "preact";
import {MutableRef} from "preact/hooks";

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
  ref?: MutableRef<any>
}

interface PageData {
  number?: number
  selected?: boolean
  separator: boolean
}

const PAGINATION_DELTA = 2
const MAX_PAGES = 5

export function StkPagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  totalPages = totalPages || MAX_PAGES;

  const buildPageNumber = (number: number): PageData => ({
    number,
    selected: number === currentPage,
    separator: false,
  })

  const handlePageChange = (number: number) => {
    onPageChange(number);
  }

  const generatePages = (): ReadonlyArray<PageData> => {
    // Based on simple-pagination.js algorithm
    // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
    const last = totalPages
    const left = currentPage - PAGINATION_DELTA
    const right = currentPage + PAGINATION_DELTA + 1

    const range = Array.from(new Array(last), (n, index) => index + 1).filter(
      (page) => {
        return page === 1 || page === last || (left <= page && page < right)
      },
    )

    const results: PageData[] = []

    let previousPage: number
    range.forEach((page) => {
      if (previousPage) {
        if (page - previousPage === 2) {
          results.push(buildPageNumber(previousPage + 1))
        } else if (page - previousPage !== 1) {
          results.push({ separator: true })
        }
      }
      results.push(buildPageNumber(page))
      previousPage = page
    })

    return results
  }

  const pages = generatePages()
  const hasPreviousPage = 0 < currentPage - 1
  const hasNextPage = currentPage + 1 <= totalPages

  return (
    <>
      <nav className="stk-pagination">
        {hasPreviousPage ? (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={classNames(
              'stk-pagination__button',
              'stk-pagination__button--prev',
              'stk-pagination__button--first',
            )}
            data-testid="prev-button"
          >
            Previous
          </button>
        ) : (
          <span
            className={classNames(
              'stk-pagination__button',
              'stk-pagination__button--prev',
              'stk-pagination__button--first',
              'stk-pagination__button--disabled',
            )}
            data-testid="prev-placeholder"
          >
            Previous
          </span>
        )}
        {pages.map((page, index) => (
          <Fragment key={page}>
            {page.number ? (
              <button
                onClick={() => handlePageChange(page.number)}
                className={classNames('stk-pagination__button', {
                  'stk-pagination__button--selected': page.selected,
                  'stk-pagination__button--first': isSeparatorPrior(
                    page,
                    pages,
                  ),
                  'stk-pagination__button--last': isSeparatorAfter(page, pages),
                })}
                key={index}
                data-testid="page-button"
              >
                {page.number}
              </button>
            ) : (
              <span className="stk-pagination__separator" data-testid="page-button-hellip">&hellip;</span>
            )}
          </Fragment>
        ))}
        {hasNextPage ? (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={classNames(
              'stk-pagination__button',
              'stk-pagination__button--next',
              'stk-pagination__button--last',
            )}
            data-testid="next-button"
          >
            Next
          </button>
        ) : (
          <span
            className={classNames(
              'stk-pagination__button',
              'stk-pagination__button--next',
              'stk-pagination__button--last',
              'stk-pagination__button--disabled',
            )}
            data-testid="next-placeholder"
          >
            Next
          </span>
        )}
      </nav>
    </>
  )
}

function isSeparatorPrior(
  page: PageData,
  pages: ReadonlyArray<PageData>,
): boolean {
  return pages[pages.indexOf(page) - 1]?.separator
}

function isSeparatorAfter(
  page: PageData,
  pages: ReadonlyArray<PageData>,
): boolean {
  return pages[pages.indexOf(page) + 1]?.separator
}
