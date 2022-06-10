const express = require('express');
const app = express();
const cors =require('cors')
const PORT = 8000

app.use(cors())

const team = {
    'chris bassitt':{
        'firstName': 'Chris',
        'lastName': 'Bassitt',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/605135/headshot/67/current',
        'jerseyNumber': 40,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 33,
        'nickname': 'C Bass'
    },
    'carlos carrasco':{
        'firstName': 'Carlos',
        'lastName': 'Carrasco',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/471911/headshot/67/current',
        'jerseyNumber': 59,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 35,
        'nickname': 'Cookie'
    },
    'edwin diaz':{
        'firstName': 'Edwin',
        'lastName': 'Diaz',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/621242/headshot/67/current',
        'jerseyNumber': 39,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 28,
        'nickname': 'Sugar'
    },
    'colin holderman':{
        'firstName': 'Colin',
        'lastName': 'Holderman',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/670059/headshot/67/current',
        'jerseyNumber': 35,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 26,
        'nickname': 'None'
    },
    'seth lugo':{
        'firstName': 'Seth',
        'lastName': 'Lugo',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/607625/headshot/67/current',
        'jerseyNumber': 67,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 32,
        'nickname': 'Quarterrican'
    },
    'stephen nogosek':{
        'firstName': 'Stephen',
        'lastName': 'Nogosek',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/668665/headshot/67/current',
        'jerseyNumber': 85,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 27,
        'nickname': 'None'
    },
    'adam ottavino':{
        'firstName': 'Adam',
        'lastName': 'Ottavino',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/493603/headshot/67/current',
        'jerseyNumber': 0,
        'position': 'P',
        'bats':'S',
        'throws': 'R',
        'age': 36,
        'nickname': 'Brooklyn'
    },
    'david peterson':{
        'firstName': 'David',
        'lastName': 'Peterson',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/656849/headshot/67/current',
        'jerseyNumber': 23,
        'position': 'P',
        'bats':'L',
        'throws': 'L',
        'age': 26,
        'nickname': 'None'
    },
    'joely rodriguez':{
        'firstName': 'Joely',
        'lastName': 'Rodriguez',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/570257/headshot/67/current',
        'jerseyNumber': 30,
        'position': 'P',
        'bats':'L',
        'throws': 'L',
        'age': 30,
        'nickname': 'La Fiera'
    },
    'chasen shreve':{
        'firstName': 'Chasen',
        'lastName': 'Shreve',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/592741/headshot/67/current',
        'jerseyNumber': 43,
        'position': 'P',
        'bats':'L',
        'throws': 'L',
        'age': 31,
        'nickname': 'Sha-Reef'
    },
    'drew smith':{
        'firstName': 'Drew',
        'lastName': 'Smith',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/622098/headshot/67/current',
        'jerseyNumber': 62,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 28,
        'nickname': 'Smitty'
    },
    'taijuan walker':{
        'firstName': 'Taijuan',
        'lastName': 'Walker',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/592836/headshot/67/current',
        'jerseyNumber': 99,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 29,
        'nickname': 'Tai Weezy'
    },
    'trevor williams':{
        'firstName': 'Trevor',
        'lastName': 'Williams',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/592866/headshot/67/current',
        'jerseyNumber': 29,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 30,
        'nickname': 'Project'
    },

    'patrick mazeika':{
        'firstName': 'Patrick',
        'lastName': 'Mazeika',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/664850/headshot/67/current',
        'jerseyNumber': 4,
        'position': 'C',
        'bats':'L',
        'throws': 'R',
        'age': 28,
        'nickname': 'None'
    },
    'tomas nido':{
        'firstName': 'Tomas',
        'lastName': 'Nido',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/621512/headshot/67/current',
        'jerseyNumber': 3,
        'position': 'C',
        'bats':'R',
        'throws': 'R',
        'age': 28,
        'nickname': 'Needz'
    },

    'pete alonso':{
        'firstName': 'Pete',
        'lastName': 'Alonso',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/624413/headshot/67/current',
        'jerseyNumber': 20,
        'position': '1B',
        'bats':'R',
        'throws': 'R',
        'age': 27,
        'nickname': 'Polar Bear'
    },
    'j.d. davis':{
        'firstName': 'J.D.',
        'lastName': 'Davis',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/605204/headshot/67/current',
        'jerseyNumber': 28,
        'position': '3B',
        'bats':'R',
        'throws': 'R',
        'age': 29,
        'nickname': 'Dizzle'
    },
    'eduardo escobar':{
        'firstName': 'Eduardo',
        'lastName': 'Escobar',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/500871/headshot/67/current',
        'jerseyNumber': 10,
        'position': '3B',
        'bats':'S',
        'throws': 'R',
        'age': 33,
        'nickname': 'El De La Pica'
    },
    'luis guillorme':{
        'firstName': 'Luis',
        'lastName': 'Guillorme',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/641645/headshot/67/current',
        'jerseyNumber': 13,
        'position': '3B',
        'bats':'L',
        'throws': 'R',
        'age': 27,
        'nickname': 'Luismi'
    },
    'francisco lindor':{
        'firstName': 'Francisco',
        'lastName': 'Lindor',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/596019/headshot/67/current',
        'jerseyNumber': 12,
        'position': 'SS',
        'bats':'S',
        'throws': 'R',
        'age': 28,
        'nickname': 'Mr. Smile'
    },
    'jeff mcneil':{
        'firstName': 'Jeff',
        'lastName': 'McNeil',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/643446/headshot/67/current',
        'jerseyNumber': 1,
        'position': '2B',
        'bats':'L',
        'throws': 'R', 
        'age': 30,
        'nickname': 'Flying Squirrel'
    },

    'mark canha':{
        'firstName': 'Mark',
        'lastName': 'Canha',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/592192/headshot/67/current',
        'jerseyNumber': 19,
        'position': 'LF',
        'bats':'R',
        'throws': 'R',
        'age': 33,
        'nickname': 'Tom Ace'
    },
    'khalil lee':{
        'firstName': 'Khalil',
        'lastName': 'Lee',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/666137/headshot/67/current',
        'jerseyNumber': 26,
        'position': 'RF',
        'bats':'L',
        'throws': 'L',
        'age': 23,
        'nickname': 'None'
    },
    'starling marte':{
        'firstName': 'Starling',
        'lastName': 'Marte',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/516782/headshot/67/current',
        'jerseyNumber': 6,
        'position': 'CF',
        'bats':'R',
        'throws': 'R',
        'age': 33,
        'nickname': 'Tato'
    },
    'brandon nimmo':{
        'firstName': 'Brandon',
        'lastName': 'Nimmo',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/607043/headshot/67/current',
        'jerseyNumber': 9,
        'position': 'CF',
        'bats':'L',
        'throws': 'R',
        'age': 29,
        'nickname': 'Tater'
    },
    'nick plummer':{
        'firstName': 'Nick',
        'lastName': 'Plummer',
        'image': 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/663911/headshot/67/current',
        'jerseyNumber': 18,
        'position': 'OF',
        'bats':'L',
        'throws': 'L',
        'age': 25,
        'nickname': 'None'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:playerName', (req, res)=>{
    const playerName = req.params.playerName.toLowerCase()
    if(team[playerName]){
        res.json(team[playerName])
    }else{
        res.status(204).json({
            error: "Player not in active roster"
        })
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log("Server is running ")
})