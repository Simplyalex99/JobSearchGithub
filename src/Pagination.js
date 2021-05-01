import React from "react";

const Pagination = ({ jobsPerPage, totalJobs, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
