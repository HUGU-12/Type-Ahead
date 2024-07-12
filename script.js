const infoSource = 'https://raw.githubusercontent.com/algolia/datasets/master/basketball/nba-players.json';

const nbaPlayers = [];
fetch(infoSource)
  .then(response => response.json())
  .then(data => nbaPlayers.push(...data));

  
  function findMatches(wordToMatch,nbaPlayers){
    return nbaPlayers.filter(player => {
      const regex = new RegExp(wordToMatch,'ig');
      return player.name.match(regex) || player.team.match(regex);
    });
  }
  
  function displayMatches(){
    const matches = findMatches(this.value,nbaPlayers);
    const html = matches.map(player =>{
      const regex = new RegExp(this.value,'ig');
      const playerName = player.name.replace(regex,`<span class = "h1">${this.value}</span>`);
      const playerTeam = player.team.replace(regex, `<span class = 'h1'>${this.value}</span>`)
      
      return `<li>
      <span class='name'>${playerName}-${playerTeam}
      </span>
      </li>`;
    }).join('');
    suggestions.innerHTML = html;
  }
  
  
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('keyup',displayMatches);