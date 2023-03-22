import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://source.unsplash.com/350x300"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">This is Post title</span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
      <p className="postDesc"> 
        The post description will be like this The post description will be like
        this The post description will be like this The post description will be
        like this The post description will be like this The post description
        will be like this The post description will be like this The post
        description will be like this The post description will be like this The
        post description will be like this The post description will be like
        this The post description will be like this The post description will be
        like this The post description will be like this The post description
        will be like this The post description will be like this The post
        description will be like this The post description will be like this The
        post description will be like this The post description will be like
        this The post description will be like this The post description will be
        like this
      </p>
    </div>
  );
}
