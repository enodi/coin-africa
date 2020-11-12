import { formatDate } from "./utils";

const repositoriesContainer = document.querySelector(".repositories");

export const renderRepositories = ({
  data: {
    viewer: { repositories },
  },
}) => {
  const repoList = document.createElement("ul");

  repositories.nodes.forEach((repository) => {
    const repoListItem = document.createElement("li");

    const starIcon = document.createElement("img");
    starIcon.className += "star-icon";
    starIcon.src +=
      "https://res.cloudinary.com/enodi/image/upload/v1605207305/star.svg";

    const starButtonSection = document.createElement("div");
    starButtonSection.className += "star-button-section";

    const repoName = document.createElement("p");
    repoName.innerHTML += repository.name;

    const starButton = document.createElement("button");
    starButton.appendChild(starIcon);
    starButton.innerHTML += "Star";

    starButtonSection.appendChild(repoName);
    starButtonSection.appendChild(starButton);
    repoListItem.appendChild(starButtonSection);

    const repoDetails = document.createElement("div");
    repoDetails.className += "repo-details";

    const primaryLanguageWrapper = document.createElement("span");
    primaryLanguageWrapper.className += "primary-language__wrapper";

    const languageColor = document.createElement("span");
    languageColor.style.backgroundColor += repository.primaryLanguage.color;
    languageColor.className += "primary-language--color";

    const primaryLanguage = document.createElement("span");
    primaryLanguage.innerHTML += repository.primaryLanguage.name;
    primaryLanguage.className += "primary-language";

    primaryLanguageWrapper.appendChild(languageColor);
    primaryLanguageWrapper.appendChild(primaryLanguage);
    repoDetails.appendChild(primaryLanguageWrapper);

    if (repository.stargazerCount > 0) {
      const starCountWrapper = document.createElement("span");
      starCountWrapper.className += "star-count__wrapper";

      const starCount = document.createElement("span");
      starCount.innerHTML += repository.stargazerCount;
      starCount.className += "star-count--color";

      starCountWrapper.appendChild(starIcon);
      starCountWrapper.appendChild(starCount);
      repoDetails.appendChild(starCountWrapper);
    }

    if (repository.forkCount > 0) {
      const forkCountWrapper = document.createElement("span");
      forkCountWrapper.className += "fork-count__wrapper";

      const forkIcon = document.createElement("img");
      forkIcon.className += "fork-icon";
      forkIcon.src +=
        "https://res.cloudinary.com/enodi/image/upload/v1605208519/54873012-40fa5b00-4dd6-11e9-98e0-cc436426c720.png";

      const forkCount = document.createElement("span");
      forkCount.innerHTML += repository.forkCount;
      forkCount.className += "fork-count--color";

      forkCountWrapper.appendChild(forkIcon);
      forkCountWrapper.appendChild(forkCount);
      repoDetails.appendChild(forkCountWrapper);
    }

    const updatedAt = document.createElement("span");
    updatedAt.innerHTML += `Updated on ${formatDate(repository.updatedAt)}`;
    updatedAt.className += "updated-at";

    repoDetails.appendChild(updatedAt);
    repoListItem.appendChild(repoDetails);
    repoList.appendChild(repoListItem);
  });

  repositoriesContainer.appendChild(repoList);
};
