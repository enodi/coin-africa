import { renderUserInfo } from "./user-info";
import { renderRepositories } from "./repositories";

const options = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
  body: JSON.stringify({
    query: `{
      viewer {
        avatarUrl
        name
        login
        bio
        repositories(
            last: 20
            privacy: PUBLIC
            orderBy: {field: UPDATED_AT, direction: DESC} 
        ){
          nodes {
            name
            primaryLanguage {
              color
              name
            }
            stargazerCount
            forkCount
            updatedAt
          }
        }
      },
    }`,
  }),
};

const loader = document.querySelector("#loader");
fetch("https://api.github.com/graphql", options).then(async (res) => {
  const data = await res.json();
  loader.style.display = "none";
  renderUserInfo(data);
  renderRepositories(data);
});
