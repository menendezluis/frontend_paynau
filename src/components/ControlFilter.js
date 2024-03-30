import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const ControlFilter = ({ onFilterChange, onSortChange, onResetFilters }) => {
  const [userId, setUserId] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [bodyText, setBodyText] = useState("");

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    onFilterChange({ userId: e.target.value, sortBy, bodyText });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    onSortChange(e.target.value);
  };

  const handleBodyTextChange = (e) => {
    setBodyText(e.target.value);
    onFilterChange({ userId, sortBy, bodyText: e.target.value });
  };

  const handleResetFilters = () => {
    setUserId("");
    setSortBy("");
    setBodyText("");
    onResetFilters();
  };

  useEffect(() => {
    onFilterChange({ userId, sortBy, bodyText });
  }, [userId, sortBy, bodyText, onFilterChange]);

  return (
    <Form className="d-flex justify-content-center">
      <Row>
        <Col>
          <Form.Group controlId="userIdFilter">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              value={userId}
              onChange={handleUserIdChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="sortBy">
            <Form.Label>Sort By</Form.Label>
            <Form.Control
              as="select"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">None</option>
              <option value="title">Title</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="bodyTextFilter">
            <Form.Label>Body Text</Form.Label>
            <Form.Control
              type="text"
              value={bodyText}
              onChange={handleBodyTextChange}
            />
          </Form.Group>
        </Col>
        <Col className="d-flex align-items-end">
          <Button variant="danger" onClick={handleResetFilters}>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ControlFilter;
