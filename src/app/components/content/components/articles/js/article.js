import React from 'react';

const Article = ({ article_class, image_class, text, children }) => {
  return (
    <article className={article_class}>
      <div className={`image ${image_class}`}></div>
      <h4>{text}</h4>
      {children}
    </article>
  );
};

export default Article;
