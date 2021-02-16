import Manage1 from "./images/portfolio/desktop/image-portfolio-manage.jpg";
import Bookmark1 from "./images/portfolio/desktop/image-portfolio-bookmark.jpg";
import Fylo1 from "./images/portfolio/desktop/image-portfolio-fylo.jpg";
import Insure1 from "./images/portfolio/desktop/image-portfolio-insure.jpg";
import Manage2 from "./images/portfolio/tablet/image-portfolio-manage.jpg";
import Bookmark2 from "./images/portfolio/tablet/image-portfolio-bookmark.jpg";
import Fylo2 from "./images/portfolio/tablet/image-portfolio-fylo.jpg";
import Insure2 from "./images/portfolio/tablet/image-portfolio-insure.jpg";
import Manage3 from "./images/portfolio/mobile/image-portfolio-manage.jpg";
import Bookmark3 from "./images/portfolio/mobile/image-portfolio-bookmark.jpg";
import Fylo3 from "./images/portfolio/mobile/image-portfolio-fylo.jpg";
import Insure3 from "./images/portfolio/mobile/image-portfolio-insure.jpg";

export const dataProjects = [
  {
    images: { img1: Manage1, img2: Manage2, img3: Manage3 },
    title: "Manage",
    descriptionShort:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  },
  {
    images: { img1: Bookmark1, img2: Bookmark2, img3: Bookmark3 },
    title: "Bookmark",
    descriptionShort:
      "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  },
  {
    images: { img1: Insure1, img2: Insure2, img3: Insure3 },
    title: "Insure",
    descriptionShort:
      "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  },
  {
    images: { img1: Fylo1, img2: Fylo2, img3: Fylo3 },
    title: "Fylo",
    descriptionShort:
      "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  },
];
