const express = require('express');
const app = express();
const cors =require('cors')
const PORT = 8000

app.use(cors())

const team = {
    'chris bassitt':{
        'firstName': 'Chris',
        'lastName': 'Bassitt',
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
        'jerseyNumber': 59,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 35,
        'nickname': 'Cookie'
    },
    'Edwin Diaz':{
        'firstName': 'Edwin',
        'lastName': 'Diaz',
        'jerseyNumber': 39,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 28,
        'nickname': 'Sugar'
    },
    'Colin Holderman':{
        'firstName': 'Colin',
        'lastName': 'Holderman',
        'jerseyNumber': 35,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 26,
        'nickname': 'None'
    },
    'Seth Lugo':{
        'firstName': 'Seth',
        'lastName': 'Lugo',
        'jerseyNumber': 67,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 32,
        'nickname': 'Quarterrican'
    },
    'Stephen Nogosek':{
        'firstName': 'Stephen',
        'lastName': 'Nogosek',
        'jerseyNumber': 85,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 27,
        'nickname': 'None'
    },
    'Adam Ottavino':{
        'firstName': 'Adam',
        'lastName': 'Ottavino',
        'jerseyNumber': 0,
        'position': 'P',
        'bats':'S',
        'throws': 'R',
        'age': 36,
        'nickname': 'Brooklyn'
    },
    'David Peterson':{
        'firstName': 'David',
        'lastName': 'Peterson',
        'jerseyNumber': 23,
        'position': 'P',
        'bats':'L',
        'throws': 'L',
        'age': 26,
        'nickname': 'None'
    },
    'Joely Rodriguez':{
        'firstName': 'Joely',
        'lastName': 'Rodriguez',
        'jerseyNumber': 30,
        'position': 'P',
        'bats':'L',
        'throws': 'L',
        'age': 30,
        'nickname': 'La Fiera'
    },
    'Chasen Shreve':{
        'firstName': 'Chasen',
        'lastName': 'Shreve',
        'jerseyNumber': 43,
        'position': 'P',
        'bats':'L',
        'throws': 'L',
        'age': 31,
        'nickname': 'Sha-Reef'
    },
    'Drew Smith':{
        'firstName': 'Drew',
        'lastName': 'Smith',
        'jerseyNumber': 62,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 28,
        'nickname': 'Smitty'
    },
    'Taijuan Walker':{
        'firstName': 'Taijuan',
        'lastName': 'Walker',
        'jerseyNumber': 99,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 29,
        'nickname': 'Tai Weezy'
    },
    'Trevor Williams':{
        'firstName': 'Trevor',
        'lastName': 'Williams',
        'jerseyNumber': 29,
        'position': 'P',
        'bats':'R',
        'throws': 'R',
        'age': 30,
        'nickname': 'Project'
    },

    'Patrick Mazeika':{
        'firstName': 'Patrick',
        'lastName': 'Mazeika',
        'jerseyNumber': 4,
        'position': 'C',
        'bats':'L',
        'throws': 'R',
        'age': 28,
        'nickname': 'None'
    },
    'Tomas Nido':{
        'firstName': 'Tomas',
        'lastName': 'Nido',
        'jerseyNumber': 3,
        'position': 'C',
        'bats':'R',
        'throws': 'R',
        'age': 28,
        'nickname': 'Needz'
    },

    'Pete Alonso':{
        'firstName': 'Pete',
        'lastName': 'Alonso',
        'jerseyNumber': 20,
        'position': '1B',
        'bats':'R',
        'throws': 'R',
        'age': 27,
        'nickname': 'Polar Bear'
    },
    'J.D. Davis':{
        'firstName': 'J.D.',
        'lastName': 'Davis',
        'jerseyNumber': 28,
        'position': '3B',
        'bats':'R',
        'throws': 'R',
        'age': 29,
        'nickname': 'Dizzle'
    },
    'Eduardo Escobar':{
        'firstName': 'Eduardo',
        'lastName': 'Escobar',
        'jerseyNumber': 10,
        'position': '3B',
        'bats':'S',
        'throws': 'R',
        'age': 33,
        'nickname': 'El De La Pica'
    },
    'Luis Guillorme':{
        'firstName': 'Luis',
        'lastName': 'Guillorme',
        'jerseyNumber': 13,
        'position': '3B',
        'bats':'L',
        'throws': 'R',
        'age': 27,
        'nickname': 'Luismi'
    },
    'Francisco Lindor':{
        'firstName': 'Francisco',
        'lastName': 'Lindor',
        'jerseyNumber': 12,
        'position': 'SS',
        'bats':'S',
        'throws': 'R',
        'age': 28,
        'nickname': 'Mr. Smile'
    },
    'Jeff McNeil':{
        'firstName': 'Jeff',
        'lastName': 'McNeil',
        'jerseyNumber': 1,
        'position': '2B',
        'bats':'L',
        'throws': 'R', 
        'age': 30,
        'nickname': 'Flying Squirrel'
    },

    'Mark Canha':{
        'firstName': 'Mark',
        'lastName': 'Canha',
        'jerseyNumber': 19,
        'position': 'LF',
        'bats':'R',
        'throws': 'R',
        'age': 33,
        'nickname': 'Tom Ace'
    },
    'Khalil Lee':{
        'firstName': 'Khalil',
        'lastName': 'Lee',
        'jerseyNumber': 26,
        'position': 'RF',
        'bats':'L',
        'throws': 'L',
        'age': 23,
        'nickname': 'None'
    },
    'Starling Marte':{
        'firstName': 'Starling',
        'lastName': 'Marte',
        'jerseyNumber': 6,
        'position': 'CF',
        'bats':'R',
        'throws': 'R',
        'age': 33,
        'nickname': 'Tato'
    },
    'Brandon Nimmo':{
        'firstName': 'Brandon',
        'lastName': 'Nimmo',
        'jerseyNumber': 9,
        'position': 'CF',
        'bats':'L',
        'throws': 'R',
        'age': 29,
        'nickname': 'Tater'
    },
    'Nick Plummer':{
        'firstName': 'Nick',
        'lastName': 'Plummer',
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