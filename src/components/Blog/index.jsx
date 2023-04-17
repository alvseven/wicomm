import { Button } from "../../components";
import { PostCard } from "./PostCard";

import { BlogContainer, PostsList } from "./styles";

import blog from "../../assets/blog.svg";
import blog2 from "../../assets/blog2.svg";
import blog3 from "../../assets/blog3.svg";

export const Blog = () => {
  return (
    <BlogContainer>
      <div>
        <h3>
          CONFIRA O<span>NOSSO BLOG</span>
        </h3>
        <Button fontSize="14px" width="9%" height="40px">
          LER TODOS
        </Button>
      </div>
      <PostsList>
        <PostCard src={blog} alt="a person doing exercise" />
        <PostCard src={blog2} alt="a woman training" />
        <PostCard src={blog3} alt="a guy doing exercise" />
      </PostsList>
    </BlogContainer>
  );
};
