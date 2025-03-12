function gameObject(){
    let obj = {
        home:{
            teamName : "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                "Reggie Evans" : {
                    number: 30,
                    shoe: 14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:1
                },
                "Brook Lopez" : {
                    number: 11,
                    shoe: 17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                "Mason Plumlee" : {
                    number: 1,
                    shoe: 19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry" : {
                    number: 31,
                    shoe: 15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            colors: ["Turqoise", "Purple"],
            players: {
                "Jeff Adrien" : {
                    number: 4,
                    shoe: 18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }
                
                
                
                
            }
        }
    }
    return obj;
}

function numPointsScored(playerName){
    const game = gameObject();

    for (let teamType in game) {
        let players = game[teamType].players;

        if (players[playerName]) {
            return players[playerName].points;
        }
    }
    return "Player not found";
}

function shoeSize(playerName) {
    const game = gameObject();

    for (let teamType in game) {
        let players = game[teamType].players;
        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
    return "Player not found";
}

function teamColors(teamName) {
    const game = gameObject();

    for (let teamType in game) {
        if (game[teamType].teamName === teamName) {
            return game[teamType].colors;
        }
    }
    return "Team not found";
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();

    for (let teamType in game) {
        if (game[teamType].teamName === teamName) {
            return Object.values(game[teamType].players).map(player => player.number);
        }
    }
    return "Team not found";
}

function playerStats(playerName) {
    const game = gameObject();

    for (let teamType in game) {
        let players = game[teamType].players;
        if (players[playerName]) {
            return players[playerName]; 
        }
    }
    return "Player not found";
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (let teamType in game) {
        for (let player in game[teamType].players) {
            let playerData = game[teamType].players[player];
            
            if (playerData.shoe > largestShoeSize) {
                largestShoeSize = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";

    for (let teamType in game) {
        for (let player in game[teamType].players) {
            let playerData = game[teamType].players[player];
            
            if (playerData.points > maxPoints) {
                maxPoints = playerData.points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    let scores = { home: 0, away: 0 };

    for (let teamType in game) {
        for (let player in game[teamType].players) {
            scores[teamType] += game[teamType].players[player].points;
        }
    }

    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let teamType in game) {
        for (let player in game[teamType].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = playerWithLongestName(); 
    let maxSteals = 0;
    let topStealer = "";

    
    for (let teamType in game) {
        for (let player in game[teamType].players) {
            let steals = game[teamType].players[player].steals;

            if (steals > maxSteals) {
                maxSteals = steals;
                topStealer = player;
            }
        }
    }

   
    return longestName === topStealer;
}

