var Twit = require('twit');
var bot = new Twit({
    consumer_key: process.env.LEARNING_BOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNING_BOT_CONSUMER_SECRET,
    access_token: process.env.LEARNING_BOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNING_BOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

// bot.post('statuses/update',{status: 'Hello world !'}
// , function(err, data, response){
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.text + ' was tweeted.');
// 	}
// })

// bot.get('followers/ids', {screen_name: 'Pratham_bot'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data)
//         }
//     }
// )

// bot.get('followers/list', {screen_name: 'Pratham_bot'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             data.users.forEach(function(user) {
//                 console.log(user.screen_name);
//             })
//         }
//     }
// )

// bot.post('friendships/create', {screen_name: 'Sud_Verma187'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data)
//         }
//     }
// )

// bot.get('friends/ids', {screen_name: 'Pratham_bot'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             // data.users.forEach(function(user) {
//             //     console.log(user.name);
//             // })
//             console.log(data);
//         }
//     }
// )

// bot.get('friends/list', {screen_name: 'Pratham_bot'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             data.users.forEach(function(user) {
//                 console.log(user.name);
//             })
//             // console.log(data);
//         }
//     }
// )

// bot.get('friendships/lookup', {screen_name: 'Sud_Verma187'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     }
// )

// bot.post('direct_messages/new', 
//     {screen_name: 'Sud_Verma187', text: 'Hi Sud, this message is sent from twitter bot.'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data)
//         }
//     }
// )

function getBotTimeline() {
    bot.get('statuses/home_timeline', {count: 5}, 
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                data.forEach(function(d) {
                    console.log(d.text);
                    console.log(d.user.screen_name);
                    console.log(d.id_str);
                    console.log("\n");
                })
            }
        }
    )
}

// getBotTimeline();

// bot.post('statuses/unretweet/:id', {id: '865980490259582980'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data.text + ' was unretweeted.');
//         }
//     }
// )

// bot.post('favorites/create', {id: '865980490259582980'}, 
//     function(err, data, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data.text + ' was liked.');
//         }
//     }
// )

bot.post('statuses/update', 
    {status: '@premierleague yay!', in_reply_to_status_id: '865980490259582980'}, 
    function(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
)



