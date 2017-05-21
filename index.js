var Twit = require('twit');
var bot = new Twit({
    consumer_key: process.env.LEARNING_BOT_CONSUMER_KEY,
    consumer_secret: process.env.LEARNING_BOT_CONSUMER_SECRET,
    access_token: process.env.LEARNING_BOT_ACCESS_TOKEN,
    access_token_secret: process.env.LEARNING_BOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

const PostId = '865980490259582980';

function tweet() {
    bot.post('statuses/update', {status: 'Hello world !'}, 
        function (err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(data.text + ' was tweeted.');
        }
    })
}

function getListOfFollowersId() {
    bot.get('followers/ids', {screen_name: 'Pratham_bot'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    )
}

function getListOfFollowers() {
    bot.get('followers/list', {screen_name: 'Pratham_bot'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                data.users.forEach(function(user) {
                    console.log(user.screen_name);
                });
            }
        }
    )
}

function followPerson() {
    bot.post('friendships/create', {screen_name: 'Sud_Verma187'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    )
}

function getListOfFriendsIds() {
    bot.get('friends/ids', {screen_name: 'Pratham_bot'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    )
}

function getListOfFriends() {
    bot.get('friends/list', {screen_name: 'Pratham_bot'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                data.users.forEach(function(user) {
                    console.log(user.name);
                });
            }
        }
    )
}

function getFriendShipDetails() {
    bot.get('friendships/lookup', {screen_name: 'Sud_Verma187'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    )
}

function sendMessageToFriend() {
    bot.post('direct_messages/new', 
        {screen_name: 'Sud_Verma187', text: 'Hi Sud, this message is sent from twitter bot.'}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    )
}

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

function reTweet() {
    bot.post('statuses/retweet/:id', {id: PostId}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was retweeted.');
            }
        }
    )
}

function cancelReTweet() {
    bot.post('statuses/unretweet/:id', {id: PostId}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was unretweeted.');
            }
        }
    )
}

function likePost() {
    bot.post('favorites/create', {id: PostId}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was liked.');
            }
        }
    )
}

function unLikePost() {
    bot.post('favorites/destroy', {id: PostId}, 
        function (err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was unliked.');
            }
        }
    )
}

function replyToPost() {
    bot.post('statuses/update', 
        {status: '@premierleague yay!', in_reply_to_status_id: PostId}, 
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    )
}



