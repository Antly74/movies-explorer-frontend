import './AboutProjectArticle.css';

function AboutProjectArticle({header, text}) {
  return (
    <article className="about-project-article">
      <h3 className="about-project-article__header">{header}</h3>
      <p className="about-project-article__text">{text}</p>
    </article>
  );
}

export default AboutProjectArticle;
