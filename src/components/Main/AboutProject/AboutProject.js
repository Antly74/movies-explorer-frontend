import Section from '../../Section/Section';
import './AboutProject.css';
import AboutProjectArticle from './AboutProjectArticle/AboutProjectArticle';

function AboutProject() {
  return (
    <Section
      sectionStyle="dark"
      headerStyle="normal"
      containerStyle="normal"
      name="О проекте"
    >
      <div className="about-project__description">
        <AboutProjectArticle
          header="Дипломный проект включал 5 этапов"
          text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
        />
        <AboutProjectArticle
          header="На выполнение диплома ушло 5 недель"
          text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
        />
      </div>

      <div className="about-project__chart">
        <div className="about-project__chart-item about-project__chart-item_style_green">1&nbsp;неделя</div>
        <div className="about-project__chart-item about-project__chart-item_style_gray">4 недели</div>
        <div className="about-project__chart-item about-project__chart-item_style_trans">Back-end</div>
        <div className="about-project__chart-item about-project__chart-item_style_trans">Front-end</div>
      </div>
    </Section>
  );
}

export default AboutProject;
