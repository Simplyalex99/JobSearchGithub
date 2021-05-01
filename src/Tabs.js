import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Button,
  Badge,
} from "react-bootstrap";
import axios from "axios";
const URL = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    axios
      .get(URL)
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <Container>
      <h1>Experience</h1>

      <Row>
        <Col>
          {jobs.map((job, index) => {
            return (
              <Row>
                <Button
                  variant="secondary"
                  key={index}
                  onClick={() => setValue(index)}
                  className="mb-2"
                >
                  {job.company}
                </Button>
              </Row>
            );
          })}
        </Col>
        <Col>
          <Card>
            <Card.Title>{title}</Card.Title>
            <Badge variant="secondary" className="mr-2 mb-2">
              {company}
            </Badge>
            <Card.Subtitle className="text-muted mb-2">{dates}</Card.Subtitle>
            {duties.map((duty, index) => {
              return <Card.Text>{duty}</Card.Text>;
            })}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tabs;
