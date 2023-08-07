import React from 'react';
import '../Pages.css';

const BlogPost = () => {
  return (
    <div className="razvojna-page">
      <img src="/path/to/image.jpg" alt="Blog Post" className="blog-post-image" />
      <div className="blog-post-content">
        <h2 className="blog-post-title">Title of the Blog Post</h2>
        <p className="blog-post-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget justo et ex venenatis tempus vitae nec erat.
          Suspendisse potenti. Fusce viverra lacinia mauris, a iaculis justo tempor in. Cras venenatis lectus sed finibus
          volutpat. Nunc accumsan, purus ut facilisis condimentum, risus sem interdum arcu, id tempor neque nunc sit amet
          tortor. Quisque consequat maximus dolor sit amet volutpat. Aenean auctor tortor nec augue rutrum, a feugiat justo
          vulputate. Aliquam aliquet dui ut lectus eleifend, id tristique lorem tristique. Nullam tincidunt nunc vel orci
          cursus, in dignissim velit euismod. Curabitur tincidunt viverra dolor id scelerisque.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
