import imgTSN from "../../assets/theSocialNetwork.png";
import imgJate from "../../assets/jate.png";
import techBlog from "../../assets/techBlog.png";

export const projects = [
  {
    title: "The Social Network",
    url: "https://github.com/drewlovato/thesocialnetwork",
    image: imgTSN,
    description:
      "This application is the backend database for a social network application. The application allows you to manipulate the user pool by GET, UPDATE, and DELETE users along with adding thoughts, reactions and friends to each one of those users.",
    technologies: "Express, MongoDB, Javascript",
  },
  {
    title: "Just Another Text Editor",
    url: "https://drewlovato-jate.herokuapp.com/",
    image: imgJate,
    description:
      "This application is a text editor that will allow you take detailed notes and save them to a database to reference the notes later.",
    technologies: "Express, NoSql, Javascript, Heroku",
  },
  {
    title: "Tech Blog",
    url: "https://tech-blog-heroku-app.herokuapp.com/",
    image: techBlog,
    description:
      "This application allows you to blog posts about tech. When logged into to your account with a username and password, you are able to add, remove, and edit posts. On the profile page you can see your credentials and change your password if necessary.",
    technologies: "Express, Mysql, Javascript, Heroku, HTML, Scss",
  },
];
