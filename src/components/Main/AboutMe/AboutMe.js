import Section from '../../Section/Section';
import './AboutMe.css';
import foto from '../../../images/foto.jpg'

function AboutMe() {
  return (
    <Section
      sectionStyle="darkwide"
      headerStyle="normal"
      containerStyle="normal"
      name="Студент"
    >
      <article className="about-me__article">
        <h3 className="about-me__header">Виталий</h3>
        <h4 className="about-me__about">Фронтенд-разработчик, 30 лет</h4>
        <p className="about-me__story">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="about-me__link" href="https://github.com/Antly74">Github</a>
        <img className="about-me__foto" src={foto} alt="мое фото" />
      </article>
    </Section>
  );
}

export default AboutMe;
