import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";

const AllPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (post) {
          setPost(posts.documents);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div
              className="p-2 w-1/4
            "
              key={post.$id}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
