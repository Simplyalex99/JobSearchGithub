import React from "react";
import { Card, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./App.css";
const Job = ({ job, onClick }) => {
  return (
    <Card>
      <Card.Body>
        <div
          className="d-flex justify-content-between card-body"
          onClick={() => onClick(job)}
        >
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>

            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
          </div>

          <div style={{ wordBreak: "break-all" }}>
            <ReactMarkdown src={job.how_to_apply}></ReactMarkdown>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Job;
