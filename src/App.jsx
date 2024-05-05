import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <div className='flex items-center mx-auto container justify-center h-screen'>
      <ReactPaginate className='flex gap-2'
        pageCount={20}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}

      />
    </div>
  );
};

export default App;
