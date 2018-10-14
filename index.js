const app = "I don't do much.";

const token = '873712f971f109a89f0869311e7b6456758d59f4'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
