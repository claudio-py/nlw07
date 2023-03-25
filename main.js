const LinksSocialMedia = {
  github: "claudio-py",
  linkedin: "in/claudio-leite-383463103/",
  // youtube: "jakelinygracielly",
  // instagram: "jakeliny.gracielly",
  // twitter: "jakelinytec",
}

function changeSocialMediaLinks() {
  for (const li of socialLinks.children) {
    const social = li.getAttribute("class")
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks() // Call the function here

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPic.src = data.avatar_url
    userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()