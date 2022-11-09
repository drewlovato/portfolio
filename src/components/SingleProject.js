export default function SingleProject(props) {
  // This variable hold the project title
  const title = props.title;

  const svgGitHub = "./assets/svgGitHub.svg";

  // Creates link a titled link for the project card
  // If there is no link, it returns an empty string
  const link = props.url ? (
    <a href={props.url} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    ""
  );

  // Creates a link for the image of the project card
  // If there is no link, it returns an empty string
  const imageLink =
    props.url && props.image ? (
      <a href={props.url} target="_blank" rel="noreferrer">
        <img src={props.image} alt={title} />
      </a>
    ) : (
      ""
    );

  // Creates the description element for the project card
  const description = props.description ? <p>{props.description}</p> : "";

  // Creates the technology excerpt for the project card
  // If there is no info, it returns an empty string
  const technologies = props.technologies ? (
    <p>Technologies: {props.technologies}</p>
  ) : (
    ""
  );

  const GitHubRepoLink = props.GitHubRepoLink ? (
    <p>
      {
        <a href={props.GitHubRepoLink} target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
      }
    </p>
  ) : (
    ""
  );

  // Builds the article, i.e. card, for each project.
  return (
    <article key={title}>
      <header>
        <h3>{link}</h3>
        {GitHubRepoLink}
      </header>
      {imageLink}
      {description}
      {technologies}
    </article>
  );
}
