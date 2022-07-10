var data = [{
        notes: 'Game was played',
        time: '2017-10-04T20:24:30+00:00',
        sport: 'hockey',
        owner: 'steve',
        players: '10',
        game_id: 1
    },
    {
        notes: 'Game was played',
        time: '2017-10-04T12:35:30+00:00',
        sport: 'lacrosse',
        owner: 'steve',
        players: '6',
        game_id: 2
    },
    {
        notes: 'Game was played',
        time: '2017-10-14T20:32:30+00:00',
        sport: 'hockey',
        owner: 'steve',
        players: '4',
        game_id: 3
    },
    {
        notes: 'Game was played',
        time: '2017-10-04T10:12:30+00:00',
        sport: 'hockey',
        owner: 'henry',
        players: '10',
        game_id: 4
    },
    {
        notes: 'Game was played',
        time: '2017-10-14T20:34:30+00:00',
        sport: 'soccer',
        owner: 'john',
        players: '12',
        game_id: 5
    },
    {
        notes: 'Game was played',
        time: '2017-10-08T10:12:30+00:00',
        sport: 'hockey',
        owner: 'bola',
        players: '14',
        game_id: 6
    },
    {
        notes: 'Game was played',
        time: '2017-10-08T20:34:30+00:00',
        sport: 'soccer',
        owner: 'segun',
        players: '6',
        game_id: 7
    }
];


const groupByDate = (data) => {
    const groups = data.reduce((groups, transactions) => {
        const date = transactions.createdAt.split("T")[0];
        if (!groups[date]) {
            groups[date] = []
        }
        groups[date].push(transactions)
        return groups;
    }, {})
    console.log(groups)
}

groupByDate();

// function extract() {
//     var groups = {};

//     data.forEach(function(val) {
//         var date = val.time.split('T')[0];
//         if (date in groups) {
//             groups[date].push(val.owner);
//         } else {
//             groups[date] = new Array(val.owner);
//         }
//     });

//     console.log(groups);
//     return groups;
// }

// extract();