import { MutableRef } from "preact/hooks";
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
    ref?: MutableRef<any>;
}
export declare function StkPagination({ totalPages, currentPage, onPageChange }: PaginationProps): import("preact").JSX.Element;
