import { useState } from "react";
import Section from "../Components/Section/Section";
import Header from "../Components/Header/Header";
import "./App.scss";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
function App() {
  const [sectionList] = useState([
    {
      type: "TextAndImage",
      heading: "How about a picture",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac odio elit. Cras mattis mattis placerat. Aliquam enim mauris, dignissim non risus viverra, congue hendrerit odio. Morbi tincidunt quam et magna gravida lacinia. Mauris vestibulum sem at risus tristique consequat. Duis bibendum mauris et risus sodales, sit amet convallis nulla cursus. Sed faucibus, libero in hendrerit laoreet, lacus dolor condimentum ipsum, ac consectetur arcu enim sit amet dui. Nullam imperdiet consectetur lectus, vitae elementum risus venenatis eu. Nam varius interdum lacinia. Etiam ultrices sodales nisi et aliquam. Aliquam quis quam tempor, posuere felis iaculis, lacinia sem. Praesent faucibus lectus ac ullamcorper ornare. Vivamus risus augue, maximus eu vehicula at, rutrum a mi.",
      ],
      urlToImage: img1,
    },
    {
      type: "Hero",
      heading: "Hero heading example",
      body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
      cta: "Hero Button",
      urlToImage: img5,
    },
    {
      type: "Text",
      heading: "And this is some text",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac odio elit. Cras mattis mattis placerat. Aliquam enim mauris, dignissim non risus viverra, congue hendrerit odio. Morbi tincidunt quam et magna gravida lacinia. Mauris vestibulum sem at risus tristique consequat. Duis bibendum mauris et risus sodales, sit amet convallis nulla cursus. Sed faucibus, libero in hendrerit laoreet, lacus dolor condimentum ipsum, ac consectetur arcu enim sit amet dui. Nullam imperdiet consectetur lectus, vitae elementum risus venenatis eu. Nam varius interdum lacinia. Etiam ultrices sodales nisi et aliquam. Aliquam quis quam tempor, posuere felis iaculis, lacinia sem. Praesent faucibus lectus ac ullamcorper ornare. Vivamus risus augue, maximus eu vehicula at, rutrum a mi. Vivamus id nulla tortor.Pellentesque consequat eu est et efficitur. Aliquam posuere leo magna, sit amet tincidunt tortor accumsan sit amet. Pellentesque quis lectus nec ex egestas placerat at sit amet sem. Phasellus bibendum vitae enim non cursus. Praesent velit nulla, pharetra non placerat vel, sollicitudin a metus. Sed auctor eros vulputate condimentum tincidunt. Sed gravida ullamcorper convallis. Sed vitae metus lobortis, posuere massa a, ultricies ligula.Vivamus lorem neque, feugiat non enim non, consectetur lacinia mi. Nulla iaculis, lorem a gravida commodo, orci odio pretium diam, nec viverra justo dolor eu dolor. Suspendisse vel augue posuere, tincidunt nulla imperdiet, pellentesque augue. Praesent tempor sagittis purus, vel imperdiet mi. Sed ultrices mauris id auctor accumsan. Vestibulum vitae massa consequat, cursus nunc sed, ullamcorper arcu. Donec venenatis arcu et leo laoreet, vitae sodales urna suscipit. Sed vel libero commodo, porta tortor ut, sodales tortor. Quisque finibus leo gravida, commodo libero non, fringilla sem.",
      ],
    },
    {
      type: "TextAndImage",
      heading: "How about a picture",
      body: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac odio elit. Cras mattis mattis placerat. Aliquam enim mauris, dignissim non risus viverra, congue hendrerit odio. Morbi tincidunt quam et magna gravida lacinia. Mauris vestibulum sem at risus tristique consequat. Duis bibendum mauris et risus sodales, sit amet convallis nulla cursus. Sed faucibus, libero in hendrerit laoreet, lacus dolor condimentum ipsum, ac consectetur arcu enim sit amet dui. Nullam imperdiet consectetur lectus, vitae elementum risus venenatis eu. Nam varius interdum lacinia. Etiam ultrices sodales nisi et aliquam. Aliquam quis quam tempor, posuere felis iaculis, lacinia sem. Praesent faucibus lectus ac ullamcorper ornare. Vivamus risus augue, maximus eu vehicula at, rutrum a mi.",
      ],
      urlToImage: img1,
    },
    {
      type: "Testimonials",
      heading: "Hear some stories",
      testimonials: [
        {
          name: "Amparito",
          urlToImage: img2,
          bio: "40 años, Madrid, Empresaria",
          testimonial: "Me da igual, me encanta",
        },
        {
          name: "Amparito",
          urlToImage: img3,
          bio: "40 años, Madrid, Empresaria",
          testimonial: "Me da igual, me encanta",
        },
        {
          name: "Amparito",
          urlToImage: img4,
          bio: "40 años, Madrid, Empresaria",
          testimonial: "Me da igual, me encanta",
        },
      ],
    },
    {
      type: "SignupForm",
      heading: "No te pierdas nada",
      body: ["Yada Yada Yada"],
      form: {
        url: "#",
        method: "GET",
        cta: "Apúntate",
      },
    },
    {
      type: "Colaborators",
      heading: "Empresas que confían en nosotros",
      body: ["Yada Yada Yada"],
      colaborators: [
        {
          name: "Deloitte",
          img: "https://logodownload.org/wp-content/uploads/2019/10/deloitte-logo-1.png",
        },
        {
          name: "The Cocktail",
          img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEmSg73O4O7aQ/company-logo_200_200/0/1594107184343?e=2159024400&v=beta&t=wsqkr2Y8nCd_lUF0iq9qPxAZvbHd5hDKEwDPRRUIh18",
        },
        {
          name: "The Bridge",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR018kmlXTNWe4NyRJWrItDGdiLjO-kGtRGnJqOtIgv5IwEDV_tZ4nJyRs6Bhel16CG2b4&usqp=CAU",
        },
      ],
    },
  ]);
  return (
    <>
      <Header heading="Landing Page" menu />
      <main className="App">
        {sectionList.map((section, i) => (
          <Section key={`section-${i}`} section={section} />
        ))}
      </main>
    </>
  );
}

export default App;
