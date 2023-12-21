import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../Components";
import appwriteService from "../appwrite/config";

const EditPost = () => {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
