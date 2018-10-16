const token = '4305f564513d362e9a73941592e00f282454cad5'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
