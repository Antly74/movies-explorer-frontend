import './Section.css';

function Section({name, sectionStyle, headerStyle, containerStyle, children}) {
  return (
    <section className={`section section_style_${sectionStyle}`}>
      <h2 className={`section__header section__header_style_${headerStyle}`}>
        {name}
      </h2>
      <div className={`section__container section__container_style_${containerStyle}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;
