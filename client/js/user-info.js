const userInfo = document.querySelector(".user-info");

export const renderUserInfo = ({ data: { viewer } }) => {
  const userImage = document.createElement("img");
  userImage.src += viewer.avatarUrl;

  const userDetails = document.createElement("div");

  const userFullname = document.createElement("h1");
  userFullname.innerHTML += viewer.name;

  const userName = document.createElement("p");
  userName.className += "username";
  userName.innerHTML += viewer.login;

  const userBio = document.createElement("p");
  userBio.innerHTML += viewer.bio;

  userInfo.appendChild(userImage);
  userDetails.appendChild(userFullname);
  userDetails.appendChild(userName);
  userDetails.appendChild(userBio);
  userInfo.appendChild(userDetails);
};
