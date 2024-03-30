import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts) || [];
  useEffect(() => {
    // Despachar la acción para obtener los posts cuando el componente se monta
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">User ID: {post.userId}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
