fetch('https://raw.githubusercontent.com/afreeorange/developer-excuses/master/excuses.txt')
  .then(resp => resp.text())
  .then(res => res.split('\n').filter((val) => val !== ''))
  .then(a => a[Math.floor(Math.random() * a.length)])
  .then(x => window.document.title = x);
