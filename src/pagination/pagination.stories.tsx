import { StkPagination } from './pagination';

export default {
  title: "TestComponent"
};

export const Primary = () => <StkPagination totalPages={10} currentPage={1} onPageChange={() => {}} />;

