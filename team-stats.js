const team = {
    _players: [
      { firstName: 'Lionel', 
        lastName: 'Messi', 
        age: 36 }, 
      { firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 38 }, 
      { firstName: 'Kylian',
        lastName: 'Mbappé',
        age: 24 }
      ],
    _games: [
      { opponent: 'Canada',
        teamPoints: 2,
        opponentPoints: 1
      }, 
      { opponent: 'Nigeria',
        teamPoints: 3,
        opponentPoints: 0
      }, 
      { opponent: 'Japan',
        teamPoints: 1,
        opponentPoints: 1
      }
      
      ], 
    get playersData() {
        return this._players;
    }, 
    get gamesData() {
        return this._games;
    }, 
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            newFirstName, 
            newLastName, 
            newAge
        }
        this._players.push(player)
    }, 
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            newOpponent, 
            newTeamPoints, 
            newOpponentPoints
        }
        this._games.push(game); 
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76); 
  team.addGame('Titans', 100, 98)
  console.log(team);
  
  
  