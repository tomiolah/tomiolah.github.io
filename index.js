let load_excuses = async () => (
  await (
    await 
    fetch(
      'https://raw.githubusercontent.com/afreeorange/developer-excuses/master/excuses.txt'
    )
  ).text()
).split('\n').filter((val) => val !== '');

load_excuses()
  .then(a => a[Math.floor(Math.random() * a.length)])
  .then(x => window.document.title = x);