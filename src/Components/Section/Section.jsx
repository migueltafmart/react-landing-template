import React from "react";
import "./Section.scss";
const Section = ({ section }) => {
  return (
    <section
      className={`Section Section__${section.type}`}
      style={
        section.type === "Hero"
          ? { backgroundImage: `url(${section.urlToImage})` }
          : { backgroundImage: "black" }
      }
    >
      <div className="wrapper Section__wrapper">
        {section.type === "Hero" ? (
          <>
            <h2 className="Heading Hero__heading">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p className="Hero__body" key={`${section.id}-paragraph-${i}`}>
                {paragraph}
              </p>
            ))}
            <button className="Primary-Button">{section.cta}</button>
          </>
        ) : section.type === "Text" ? (
          <>
            <h2 className="Heading Text__heading">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p className="Text__body" key={`${section.id}-paragraph-${i}`}>
                {paragraph}
              </p>
            ))}
            {section.cta ? (
              <button className="Primary-Button">{section.cta}</button>
            ) : (
              <></>
            )}
          </>
        ) : section.type === "TextAndImage" ? (
          <>
            <h2 className="Heading TextAndImage__heading">{section.heading}</h2>
            <div className="TextAndImage__composer">
              {section.body.map((paragraph, i) => (
                <p
                  className="TextAndImage__body"
                  key={`${section.id}-paragraph-${i}`}
                >
                  {paragraph}
                </p>
              ))}
              {section.cta ? (
                <button className="Primary-Button">{section.cta}</button>
              ) : (
                <></>
              )}
              <img
                className="TextAndImage__image"
                src={section.urlToImage}
                alt={section.heading}
              />
            </div>
          </>
        ) : section.type === "Testimonials" ? (
          <>
            <h2 className="Heading Testimonials__heading">{section.heading}</h2>
            <div className="Testimonials__composer">
              {section.testimonials.map((user, i) => {
                return (
                  <article className="Testimonial" key={`testimonial-${i}`}>
                    <img
                      className="Testimonial__image"
                      src={user.urlToImage}
                      alt={user.name}
                    />
                    <h4 className="Testimonial__name">{user.name}</h4>
                    <span className="Testimonial__bio">{user.bio}</span>
                    <blockquote className="Testimonial__quote">
                      {user.testimonial}
                    </blockquote>
                  </article>
                );
              })}
            </div>
          </>
        ) : section.type === "SignupForm" ? (
          <>
            <h2 className="Heading SignupForm__heading">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p
                className="SignupForm__body"
                key={`${section.id}-paragraph-${i}`}
              >
                {paragraph}
              </p>
            ))}
            <form
              className="SignupForm__form"
              action={section.form.url}
              method={section.form.method}
            >
              <label htmlFor="_email">Email</label>
              <input
                placeholder="Introduce tu email"
                type="email"
                name="email"
                id="_email"
              />
              <input
                className="Primary-Button"
                type="submit"
                value={section.form.cta}
              />
            </form>
          </>
        ) : section.type === "Colaborators" ? (
          <>
            <h2 className="Heading Colaborators__heading">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p
                className="Colaborators__body"
                key={`${section.id}-paragraph-${i}`}
              >
                {paragraph}
              </p>
            ))}
            <div className="Colaborators__composer">
              {section.colaborators.map((colaborator, i) => (
                <article className='Colaborators__card' key={`collaborator-${i}`}>
                  <img className='Colaborators__img' src={colaborator.img} alt={colaborator.name} />
                  <h4>{colaborator.name}</h4>
                </article>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Section;
