import register from 'preact-custom-element';
import {useRef} from "preact/hooks"
import {StkPagination} from "./pagination";
import {VNode} from "preact";

export function StkPaginationWC({ currentPage, totalPages }): VNode {
  const ref = useRef(null);

  // Events
  const pageChange = (pageNumber: number) => {
    const componentElement = ref.current.base.parentElement;
    componentElement.dispatchEvent(new CustomEvent('pageChange', {
      detail: { pageNumber }
    }));
  };

  return (
    <StkPagination
      ref={ref}
      currentPage={parseNumberProp(currentPage)}
      totalPages={parseNumberProp(totalPages)}
      onPageChange={pageChange}
    />
  )
}

function parseNumberProp(prop: string | number): number {
  return typeof prop === 'string' ? parseInt(prop, 10) : prop;
}

register(StkPaginationWC, 'stk-pagination', ['current-page', 'total-pages', 'data'], { shadow: false });
