const articles = [
  {
    title: "Titre de l'article 1",

    image:
      "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

    subtitle: "Sous-titre de l'article 1",

    date: new Date("2021-01-01"),

    content: "Contenu de l'article 1",

    isPublished: true,
  },

  {
    title: "Titre de l'article 2",

    image:
      "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

    subtitle: "Sous-titre de l'article 2",

    date: new Date("2021-01-01"),

    content: "Contenu de l'article 2",

    isPublished: false,
  },

  {
    title: "Titre de l'article 3",

    image:
      "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",

    subtitle: "Sous-titre de l'article 3",

    date: new Date("2021-01-01"),

    content: "Contenu de l'article 3",

    isPublished: true,
  },
];

const publishedArticles = articles.filter(
  (article) => article.isPublished === true
);

const output = publishedArticles.map((article) => {
  return (
    <article className="border-2 border-neutral-600 w-60 mx-auto">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-48 mx-auto" />
      <h2>{article.subtitle}</h2>
      <p>{article.date.toDateString()}</p>
      <p>{article.content}</p>
    </article>
  );
});

const Article = () => {
  return <div>{output}</div>;
}

export default Article;