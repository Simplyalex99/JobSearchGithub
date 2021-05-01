import logo from "./logo.svg";
//import "./App.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import useFetchJobs from "./useFetchJobs";
import Job from "./job";
import React, { useState } from "react";
import JobDescription from "./JobDescription.js";
import Pagination from "./Pagination.js";
import { SearchForm } from "./SearchForm";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [job, setJob] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(8);

  const updateJobDescription = (job) => {
    setJob(job);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const setPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleParamsChange = (e) => {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prev) => {
      return { ...prev, [param]: value };
    });
  };
  return (
    <Container>
      <SearchForm params={params} onParamsChange={handleParamsChange}>
        {" "}
      </SearchForm>
      <Row>
        <Col>
          {loading && <h1>Loading...</h1>}
          {!loading && (
            <Pagination
              jobsPerPage={jobsPerPage}
              totalJobs={jobs.length}
              setCurrentPage={setCurrentPage}
            ></Pagination>
          )}
          {error && <h1>Error. Try refreshing...</h1>}
          {currentJobs.map((job) => {
            return (
              <Job key={job.id} job={job} onClick={updateJobDescription}></Job>
            );
          })}
        </Col>
        <Col>{!loading && <JobDescription job={job}></JobDescription>}</Col>
      </Row>
    </Container>
  );
}

export default App;
