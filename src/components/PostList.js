import React, { useEffect } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts) || [];

  useEffect(() => {
    // Dispatch the action to fetch posts when the component mounts
    dispatch(fetchPosts());
  }, [dispatch]);

  const getAvatarUrl = (userId) => {
    return `https://avatar.iran.liara.run/public/${userId}`;
  };

  return (
    <Container className="mt-3">
      {posts.map((post) => (
        <Card key={post.id} className="my-3">
          <Card.Body>
            <Row>
              <Col xs={2}>
                <Image
                  src={getAvatarUrl(post.userId)}
                  roundedCircle
                  style={{ width: "50px", height: "50px" }}
                />
              </Col>
              <Col xs={10}>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <small className="text-muted">User ID: {post.userId}</small>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default PostList;
