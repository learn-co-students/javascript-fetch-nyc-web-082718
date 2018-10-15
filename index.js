const app = "I don't do much.";

const token = 'aaa9f8c1e4b4bebd7b1c11933fa88bf5208ec2ab'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
