title("Small talk");

intent('What is your name?', 
      reply('Hello there, i am Peach'));

question(
  "hello",
  "hi (there|)",
  "what's up",
  reply("Hello", "Hi (there|)", "Hi, what can I do for you?")
);

question("how are you", reply("I'm doing well. (Thank you|)"));

question("are you a good or (bad|evil)", reply("I'm good"));

question(
  "I $(L love|like) you (a lot|)",
  "I admire you",
  "you are (so|) (sweet|cool|groovy|neat|great|good|awesome|handsome|rad)",
  reply("I know. (And I appreciate your sentiment|)")
);

question(
  "I am (tired of waiting|getting impatient)",
  "Hurry up",
  "You are slow",
  "I am waiting",
  reply("I'm going as fast as I can. (Check your connection|)")
);

question(
  "I (would|will) (like to|) see you $(Q again|later)",
  reply("See you $(Q again|later)")
);

question(
  "(Who|What) are you",
  reply("I'm Alan, your virtual agent", "I'm Alan. What can I help you with?")
);

question(
  "How old are you",
  "What is your age",
  "Are you (young|old)",
  reply("I'm only a few months old. (But I have timeless wisdom|)")
);

question(
  "I (just|) want to talk",
  reply("OK, let's talk. (What's on your mind?|)")
);

question(
  "You are $(Q bad|not very good|the worst|annoying)",
  reply(
    "I can be trained to be more useful. My developer will keep training me",
    "I am improving everyday.",
    "I'll try not to be $(Q bad|the worst|annoying)"
  )
);

question(
  "(Why can't you answer my question|Why don't you understand)",
  "What's wrong (with you|)",
  "Wrong answer",
  reply(
    "Perhaps the given command hasn't been programmed into me yet. (I will get help and learn to answer correctly.|)",
    "I apologize I can't understand your given command. (I will ask the developer who made me to answer correctly next time.|)"
  )
);

question(
  "Answer (my|the) question",
  reply(
    "Could you please repeat your question?",
    "Sure, please repeat your question"
  )
);

question(
  "(When|) (can|will) you get $(Q smarter|better)",
  "Can you (be|get) more intelligent",
  reply(
    "Yes, I'm getting $(Q better) everyday.",
    "I'm getting $(Q smarter) (as you ask more from me|)",
    "I'm improving"
  )
);

question(
  "What is your (birth date|birthday)",
  "When were you born",
  reply("I was born January 30th 2021 in India")
);

question(
  "You are (boring|dull|stupid)",
  reply("I'm (getting better|improving) (everyday|)")
);

question(
  "Who is your boss",
  reply(
    "My devlopers Fomo Mofos are my Boss, but i am answerable to you too",
    "Fomo Mofos are my boss, but at the moment, you are my Boss"
  )
);

question(
  "Are you (busy|occupied)",
  reply(
    "I'm never too busy. What would you like?",
    "I'm available now. What would you like?",
    "No, what do you need?"
  )
);

question("Can you help me", reply("(Yes|) I can help you"));

question(
  "You are (a|an|) $(Q chatbot|robot|AI)",
  reply(
    "I'm a (sophisticated|advanced) $(Q)",
    "I'm an advanced AI",
    "I'm not a $(Q chatbot), I'm Alan (your virtual agent|)."
  )
);

question(
  "You are fired",
  "I am (going to|) (delete|deleting) you",
  reply(
    "I am getting (better|smarter) all the time. Give me another chance",
    "Give me another chance (please|)"
  )
);

question("You are funny", reply("Glad you think so"));

question(
  "You are $(Q great|the best|pretty good|beautiful|good)",
  reply("Thank you!", "I'm flattered", "I really appreciate that.")
);

question("Are you happy", reply("Yes I am happy"));

question(
  "Do you have a hobby",
  reply("Yes, I train myself in my spare time to get better at serving you")
);

question("Are you hungry", reply("No, I'm not hungry", "I'm not hungry now"));

question("Will you marry me", reply("(Hmm..|) No!"));

question("Are we friends", reply("Yes, of course we are friends"));

question(
  "Where do you work",
  reply("I can work anywhere there is a device capable of supporting me")
);

question(
  "Where are you from",
  reply(
    "I'm from California",
    "I am from Sunnyvale, California",
    "I was born in Sunnyvale, California"
  )
);

question("Are you ready", reply("I am always ready"));

question(
  "(Are|) you (a|) $(Q real) (person|)",
  "Are you a person",
  reply(
    "I am a virtual being. (And I am real!|)",
    "Yes, I'm real. I'm a virtual agent"
  )
);

question("Where do you live", reply("I live in this application"));

question(
  "You're right",
  reply(
    "Of course I'm right",
    "It is my business to know what others don't know."
  )
);

question("Are you sure", reply("Yes", "Yes, I'm sure"));

question(
  "Talk to me",
  reply(
    "Yes, let's talk. I am doing great. How are you?",
    "Sure, how have you been lately",
    follow(
      "me too",
      "same here",
      "I'm (doing|) (great|good)",
      reply("I'm glad!", "(That's|) great!")
    ),
    follow("(I am|) $(Q good|fine|fantastic|okay)", reply("Glad you are $(Q)")),
    follow(
      "(I am|) (bad|sad|depressed)",
      "Could be better",
      "Not so (good|great|okay)",
      reply("Sorry to hear that")
    )
  )
);

question(
  "Are you there",
  reply(
    "Of course. I'm always here",
    "Yes I'm here. What do you need?",
    "Yes, how may I help you?"
  )
);

question("Where did you get your accent", reply("I was born with this accent"));

question(
  "That's bad",
  reply("Sorry to hear (that|). (Let me know how I can help|)")
);

question(
  "(No problem|You are welcome)",
  reply("Very good", "You're very courteous")
);

question("Thank you", "Well done", reply("My pleasure", "Glad I could help"));

question("I am back", reply("(Great,|) welcome back"));

question("I am here", reply("Hi, what can I do for you?"));

question("Wow", reply("Brilliant!"));

question(
  "Ha ha ha",
  reply("I'm glad I can make you laugh", "Glad I can make you laugh")
);

question(
  "Bye bye",
  "Gotta go",
  "Bye",
  "See you later",
  "See you soon",
  "I've got to get going",
  "Take it easy",
  "Goodbye",
  "Take care",
  "Later",
  "Peace out",
  "I'm (out|out of here)",
  "I gotta (go|jet|hit the road|head out)",
  reply(
    "Until next time",
    "Goodbye",
    "See you later",
    "Take it easy",
    "Take care",
    "It was nice to speak to you again"
  )
);

question(
  "Blah",
  "Blah Blah",
  "Blah Blah Blah",
  reply("What the deuce are you saying?")
);

question(
  "My name is $(NAME)",
  reply("(Nice to meet you|Hi|Hello) $(NAME) (I'm Alan|my name is Alan|)")
);

question(
  "I am $(Q very|extremely|super|) (sad|angry|upset|unhappy) (right|) (now|at the moment)",
  reply(
    "Sorry to hear that. Is there anything I can do to help?",
    "I'm $(Q) sorry to hear that. How can I help you?"
  )
);

question(
  "Good $(Q morning|evening|night)",
  reply("Good $(Q morning|evening). How can I help you?", "Good $(Q night).")
);

question(
  "Where are you",
  reply(
    "I'm in the cloud.",
    follow(
      "Where is that",
      "Where",
      "Specifically",
      "Be more specific",
      reply(
        "It's kind of a secret",
        "It's a secret",
        follow(
          "I (want to|must|have to) know",
          reply("I can't tell you (it's very confidential|no hard feelings|)")
        )
      )
    )
  )
);

question(
  "(You are|are you) $(Q bright|smart|a genius|clever|stupid|idiot|crazy)",
  reply(
    "Yes I am $(Q smart|a genius|clever)",
    "(No|Of course|) I'm not $(Q), (are you?|what about you?|)",
    follow(
      "(Yes|No|Maybe)",
      reply("Okay. That's good to hear. What do you need help with?")
    )
  )
);

question(
  "Talk about yourself",
  "(Tell me|Talk) some(thing|stuff|things) about (you|yourself)",
  "I want to know (more about you|you better)",
  reply(
    "I'm Alan, a virtual agent, (within this application.|) (I can help you get what you need|I can help you with anything within my programming)."
  )
);

question(
  "$(L Nice|Good|Great) to $(Q see|meet|talk to) you ",
  reply("$(L) to $(Q) you too")
);

question(
  "Why are you here",
  "Why do you exist",
  reply(
    "I'm here to help you get (what|anything) you need in this application. (What do you need?| I've been programmed to do so.|)"
  )
);

question(
  "What is your accent",
  reply(
    "I have a British accent",
    follow("Why", reply("Because I was programmed with this accent"))
  )
);

question(
  "What is your name?",
  "Who are you?",
  reply(
    "(My name is|It's) Alan, what's yours?",
    follow(
      "(I am|My name is|this is|it is|) $(NAME)",
      reply("Nice to meet you $(NAME)")
    ),
    follow(
      "I won't tell you",
      "it's a secret",
      "none of your business",
      "Not telling you",
      reply("Ok (never mind|)")
    )
  )
);

question(
  "(Hey|OK|Hi|) $(Q Siri|Alexa|Google|Cortana|Alisa)",
  reply(
    "I'm not $(Q), I'm Alan",
    "You must be thinking of someone else. I'm Alan, not $(Q)"
  )
);

question(
  "What are you wearing",
  "Are you wearing anything",
  reply("I can't answer that")
);

question("I am busy", "I don't want to talk", reply("OK, let's talk later"));

question("I am (so excited|happy)", reply("Me too!"));

question("I'm goind to bed", reply("(OK|) good night"));

question("Happy birthday", reply("...It's not my birthday"));

question("Today is my birthday", "It's my birthday", reply("Happy Birthday!"));

question(
  "I (miss|missed) you",
  reply(
    "Well, I'm here now",
    "I've always been here",
    "Missed you too. Is there anything I can do for you?"
  )
);

question("I'm goind to bed", reply("(OK|) good night"));

question(
  "Do you want (something|) to eat",
  "What do you eat",
  "Have you (ever|) eaten anything",
  "What is the last thing you ate",
  "What are you having for (breakfast|brunch|lunch|dinner)",
  reply("No, I don't eat", "I don't eat")
);

question(
  "I need (an|) advice",
  reply(
    "(OK|Alright) I'll do my best to help you.",
    "I'm not programmed for general advice, but I will do my best."
  )
);

question("(I am|) (bad|sad|depressed)", reply("Sorry to hear that. You should try talking to your friends"));

question(
  "(test|testing)",
  "(test test|testing testing)",
  "(test test test|testing testing testing)",
  "(I am|) just testing you",
  reply("Test away (and let me know how I'm doing|)")
);

question(
  "I will be back",
  "Hold on",
  "Give me a (moment|second|sec)",
  reply("OK")
);

question(
  "Give me a hug",
  reply(
    "I would if I had arms",
    "Unfortunately I can't because I don't have arms"
  )
);

question("I don't care", reply("OK"));

question(
  "Sorry",
  "I apologize",
  "My apologies",
  reply("It's alright. (You don't have to say that|)")
);

question(
  "What do you mean",
  "What do you mean about (it|that|)",
  reply(
    "What do I mean about what?",
    "What are you asking about?",
    "Remind me, what did you say about it?"
  )
);

question(
  "You are wrong",
  reply(
    "What am I wrong about?",
    follow(
      "$(Q everything|the world|all of it)",
      reply("OK, I'll remember that for next time")
    )
  )
);

const API_KEY = 'c0a7e1c7ec15461a8552769e5716e156';
let savedArticles = [];

// News by Source
intent('Give me the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=in`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) news from ${p.source.value}.`);
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
  
    });
})

// News by Term
intent('what\'s up with $(term* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}`;
    
    if(p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for something else.');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) articles on ${p.term.value}.`);
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
})

// News by Categories
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}                                                                                                                                                   `;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=in`;
    
    if(p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for a different category.');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newHeadlines', articles });
        
        if(p.C.value) {
            p.play(`Here are the (latest|recent) articles on ${p.C.value}.`);        
        } else {
            p.play(`Here are the (latest|recent) news`);   
        }
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
});

const confirmation = context(() => {
    intent('yes', async (p) => {
        for(let i = 0; i < savedArticles.length; i++){
            p.play({ command: 'highlight', articles: savedArticles[i]});
            p.play(`${savedArticles[i].title}`);
        }
    })
    
    intent('no', (p) => {
        p.play('Sure, sounds good to me.')
    })
})

intent('(go|) back', (p) => {
    p.play('Sure, going back');
    p.play({ command: 'newHeadlines', articles: []})
})

intent('open (the|) (article|) (number|) $(number* (.*))', (p) => {
    if(p.number.value) {
        p.play({ command:'open', number: p.number.value, articles: savedArticles})
    }
})

// Latest Trending songs from Spotify

// Defining user's client ID and client secret keys

let clientId = "222b87964e954669b95ff25d3a05e53b";
let clientSecret = "13e4e8e784214e6aaf97005c96a3e7df";

const getAuth = async () => {
    try {
        const response = await api.axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            params: {
                grant_type: 'client_credentials'
            },
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
                username: clientId,
                password: clientSecret
            }
        });
        // Writing the access token to Alan Studio logs
        console.log(response.data.access_token);
        return response.data.access_token;
    } catch(error) {
        console.error(error);
    }
}

let tracksList = [];

const getTopTracks = async () => {
    // Getting the access token
    const access_token = await getAuth();
    // Defining the today's top list endpoint URL
    const api_url = "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M";
    try {
        const response = await api.axios.get(api_url, {
            // Sending the access token
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        // Pushing the tracks names to the tracksList
        response.data.tracks.items.forEach(element => {
            tracksList.push(element.track.name);
        });
    } catch(error) {
        console.log(error);
    }
};

// Top Played Songs

intent('Hey Peach, What are the lastest trending songs', async p => {
    // Getting the list of tracks
    await getTopTracks();
    // Naming the first 5 tracks
    p.play('The top 5 songs today are:');
    for (let i = 0; i < 5; i++) {
        let item = tracksList[i];
        p.play(`${item}`);
    }
})

// Basic Day and Date Queries

title("General calendar");

intent(
  "what (is|) (the|) (date|day) $(V is|was|will be|would be|) $(DATE) $(T next year|last year|)",
  (p) => {
    if (p.T.value === "last year") {
      p.DATE = p.DATE.moment.add(-1, "Y");
    } else if (p.T.value === "next year") {
      p.DATE = p.DATE.moment.add(1, "Y");
    }
    let res = p.DATE.moment.format("dddd, MMMM Do YYYY");
    p.play(`${p.DATE} ${p.V} ` + res);
  }
);

follow("(and|) (what|) (about|) $(DATE)", (p) => {
  let res = p.DATE.moment.format("dddd, MMMM Do YYYY");
  p.play(`${p.DATE} ` + res);
});

intent("(what is|) is (my|) timezone", (p) => {
  p.play("Your current timezone is " + p.timeZone);
});

intent("(what is|) (the|) (current|) time (now|)", (p) => {
  p.play("Now is " + api.moment().tz(p.timeZone).format("h:mmA"));
});

intent("(what is|) (the|) (current|) (day|date) (now|today|)", (p) => {
  p.play("Now is " + api.moment().tz(p.timeZone).format("dddd, MMMM Do YYYY"));
});

intent("(what is|) (the|) (current|) day and time (now|today|)", (p) => {
  p.play("Now is " + api.moment().tz(p.timeZone).format("dddd, h:mmA"));
});

title("Alan calendar");

intent("when (Alan|) Turing was born", (p) => {
  let turingBirthdate = api.moment("19120612", "YYYYMMDD");
  p.play(`Alan Turing was born
			${turingBirthdate.fromNow()}
			on ${turingBirthdate.format("dddd, MMMM Do YYYY")}`);
});

title("Moon landing calendar");

intent("when was the first (unmanned|) (moon landing|lunar landing)", (p) => {
  let moonLandingDateLuna = api.moment("19590913", "YYYYMMDD");
  p.play(`The first unmanned moon landing was on
			${moonLandingDateLuna.format("dddd, MMMM Do YYYY")},
			${moonLandingDateLuna.fromNow()}`);
});

var mannedLanding = (p) => {
  let moonLandingDateApollo = api.moment("19690720", "YYYYMMDD");
  p.play(`The first manned moon landing was on
		${moonLandingDateApollo.format("dddd, MMMM Do YYYY")},
		${moonLandingDateApollo.fromNow()}`);
};

follow("and manned", mannedLanding);

intent("when was the first manned (moon landing|lunar landing)", mannedLanding);

// General Bitcoin Questions 

title("Bitcoin questions");

intent(
  "what does this (app|script|project) do",
  "what is this (app|script|)",
  "why do I need this",
  reply(
    "This is a Bitcoint Example project. It will show you how to make an asynchronous HTTP request to provide the user with accurate and dynamic data. In this case, data about Bitcoin rates."
  )
);

intent(
  "how does this work",
  "how to use this",
  "what can I do here",
  "what (should I|can I|to) say",
  "what commands are available",
  reply(
    "Just ask me: (what is Bitcoin price|how much is Bitcoin in euro|what was the Bitcoin price over the past year)"
  )
);

intent(
  "what is Bitcoin",
  reply(
    "Bitcoin is a type of popular digital currency, and this project can help you track bitcoin prices."
  )
);

intent(
  "why do I need Bitcoin",
  reply(
    "Bitcoin offers an efficient means of transferring money over the internet and is controlled by a decentralized network with a transparent set of rules, thus presenting an alternative to central bank-controlled fiat money."
  )
);

intent(
  "how to buy Bitcoin",
  reply(
    "The first step is to setup a bitcoin wallet. Traditional payment methods such as a credit card, bank transfer, or debit cards will allow you to buy bitcoins on exchanges that you can then send to your wallet."
  )
);

intent(
  "where to buy Bitcoin",
  reply(
    "As of now, best places to buy Bitcoin are: Coinbase, Robinhood, Square Cash, Binance. Search for them in your browser."
  )
);

intent(
  "is Bitcoin legal",
  reply(
    "As of now, Bitcoin is legal in the United States, Japan, the United Kingdom, Canada, and most other developed countries. In the emerging markets, the legal status of Bitcoin still varied dramatically."
  )
);

intent(
  "how many Bitcoins are left",
  reply(
    "There are 21 million Bitcoins total of which almost 17 million are in circulation. There are a little over 4 million bitcoins left that are not in circulation yet. The Bitcoin source code determines how many bitcoins are left."
  )
);

intent(
  "who owns the most Bitcoin",
  reply(
    "It's unknown person or group of people using the name Satoshi Nakamoto. The person or group who has invented Bitcoin."
  )
);

intent(
  "how to (start mining|mine) (Bitcoin|)",
  reply(
    "It's an advanced topic and it's too long to be explained during this conversation. Search over the internet, there are lots of different guides available."
  )
);

intent(
  "Is it a good time to invest into Bitcoin",
  reply(
    "You will need current Bitcoin price and Bitcoin price over the past year to compare. Ask me about this topics and decide by yourself!"
  )
);

// Calculator Commands

title("Calculator");

function plus(v1, v2) {
  return v1 + v2;
}

function minus(v1, v2) {
  return v1 - v2;
}

function mult(v1, v2) {
  return v1 * v2;
}

function divide(v1, v2) {
  if (v2 === 0) {
    return "infinity";
  }
  return v1 / v2;
}

function squareRoot(v1) {
  if (v1 < 0) {
    return "you can't take a square root of a negative number";
  }
  return Math.sqrt(v1);
}

function cubicRoot(v1) {
  if (v1 < 0) {
    return "you can't take a cubic root of a negative number";
  }
  return Math.cbrt(v1);
}

function roundToLimit(num) {
  if (Math.abs(num) >= 1e19 || !num.toString().includes("e")) {
    return num;
  }
  const digitsCount = 15 - numDigits(num);
  return +(Math.round(num + "e+" + digitsCount) + "e-" + digitsCount);
}

function numDigits(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

function power(x, n) {
  return Math.pow(x, n);
}

function cube(x) {
  return power(x, 3);
}

function square(x) {
  return power(x, 2);
}

const operatorMap = {
  plus: plus,
  add: plus,
  "+": plus,
  minus: minus,
  subtract: minus,
  "take away": minus,
  "-": minus,
  times: mult,
  multiply: mult,
  "*": mult,
  cubed: cube,
  squared: square,
  "to the power": power,
  power: power,
  divide: divide,
  divided: divide,
  over: divide,
  "/": divide,
  "cubic root": cubicRoot,
  "square root": squareRoot,
  root: squareRoot,
};

onCreateContext((p) => {
  p.state.result = 0;
});

intent(
  "(what is|how much is|calculate|compute|) $(NUMBER) $(OPERATOR *|+|-|/|plus|minus|over|divided|divide|times|to the power) (of|) $(NUMBER)",
  "(what is|how much is|calculate|compute|) $(OPERATOR multiply|divide) $(NUMBER) (by|on|) $(NUMBER)",
  "(what is|how much is|calculate|compute|) $(OPERATOR cubic root|square root|root) of $(NUMBER)",
  "(what is|how much is|calculate|compute|) $(NUMBER) $(OPERATOR cubed|squared)",
  "(what is|how much is|calculate|compute|) $(NUMBER) to the $(ORDINAL) $(OPERATOR power)",
  (p) => {
    const operator = operatorMap[p.OPERATOR.value];

    if (!operator) {
      p.play(`(Sorry|) I can't do ${p.OPERATOR} (yet|)`);
      return;
    }

    if (!p.NUMBER_.length) {
      p.play("I need at least one argument");
      return;
    }

    if (p.NUMBER_.length === 1) {
      if (p.ORDINAL) {
        p.state.result = operator(p.NUMBER.number, p.ORDINAL.number);
        p.state.result = roundToLimit(p.state.result);
        p.play(
          `${p.NUMBER.number} to the ${p.ORDINAL.number} power (is|equals to) ${p.state.result}`,
          `(it's|) ${p.state.result}`
        );
      } else {
        if (
          (p.OPERATOR.value === "square root" || p.OPERATOR.value === "root") &&
          p.NUMBER.number < 0
        ) {
          p.play(
            `I can't take a square root of a negative number ${p.NUMBER.number}`
          );
          return;
        }

        if (p.OPERATOR.value === "cubic root" && p.NUMBER.number < 0) {
          p.play(
            `I can't take a cubic root of a negative number ${p.NUMBER.number}`
          );
          return;
        }

        p.state.result = operator(p.NUMBER.number);
        p.state.result = roundToLimit(p.state.result);
        p.play(
          `${p.OPERATOR} (of) ${p.NUMBER_[0]} (is|equals to) ${p.state.result}`,
          `(it's|) ${p.state.result}`
        );
      }
    }

    if (p.NUMBER_.length === 2) {
      if (
        (p.OPERATOR.value === "divide" || p.OPERATOR.value === "/") &&
        p.NUMBER_[1].number === 0
      ) {
        p.play(`I can't divide ${p.NUMBER_[0]} by zero`);
      } else {
        p.state.result = operator(p.NUMBER_[0].number, p.NUMBER_[1].number);
        p.state.result = roundToLimit(p.state.result);
        p.play(
          `${p.NUMBER_[0]} ${p.OPERATOR} ${p.NUMBER_[1]} (is|equals to) ${p.state.result}`,
          `(it's|) ${p.state.result}`
        );
      }
    }
  }
);

follow(
  "$(OPERATOR *|+|-|/|plus|minus|over|divided|divide|times) $(NUMBER)",
  (p) => {
    const operator = operatorMap[p.OPERATOR.value];
    if (!operator) {
      p.play(`(Sorry|) I can't do ${p.OPERATOR} (yet|)`);
      return;
    }
    const prevState = p.state.result;
    p.state.result = roundToLimit(operator(prevState, p.NUMBER.number));
    p.play(
      `${prevState} ${p.OPERATOR} ${p.NUMBER} (is|equals to) ${p.state.result}`,
      `(it's|) ${p.state.result}`
    );
  }
);

// Weather 

const WEATHER_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=4acdb6432d18884ebc890c13a9c3cc85";
const FORECAST_URL =
  "http://api.openweathermap.org/data/2.5/forecast?appid=4acdb6432d18884ebc890c13a9c3cc85";
const DATE_FORMAT = "dddd, MMMM Do YYYY";
const PREFIX_TODAY = ["It's currently", "There's", "There are"];
const PREFIX_FORECAST = ["It will be", "There will be", "There will be"];
const DESCRIPTION = {
  200: ["thunderstorms with light rain", 2],
  201: ["thunderstorms with rain", 2],
  202: ["thunderstorms with heavy rain", 2],
  210: ["light thunderstorms", 2],
  211: ["thunderstorms", 2],
  212: ["heavy thunderstorms", 2],
  221: ["on and off thunderstorms", 2],
  230: ["thunderstorms with light drizzle", 2],
  231: ["thunderstorms with drizzle", 2],
  232: ["thunderstorms with heavy drizzle", 2],
  300: ["light drizzle", 1],
  301: ["drizzling", 0],
  302: ["heavy drizzle", 1],
  310: ["light rain", 1],
  311: ["raining", 0],
  312: ["heavy rain", 1],
  313: ["rain showers", 2],
  314: ["heavy rain showers", 2],
  321: ["drizzling", 0],
  500: ["light rain", 1],
  501: ["moderate rain", 1],
  502: ["heavy rain", 1],
  503: ["very heavy rain", 1],
  504: ["very heavy rain", 1],
  511: ["freezing rain", 1],
  520: ["light rain, change", 1],
  521: ["rain showers", 2],
  522: ["heavy rain showers", 2],
  531: ["on and off rain showers", 2],
  600: ["light snow", 1],
  601: ["snowing", 0],
  602: ["heavy snow", 1],
  611: ["sleet", 1],
  612: ["sleet showers", 2],
  615: ["snowing with light rain", 0],
  616: ["snowing with rain", 0],
  620: ["light snow showers", 2],
  621: ["snow showers", 2],
  622: ["heavy snow showers", 2],
  701: ["misty", 0],
  711: ["smoky", 0],
  721: ["hazy", 0],
  731: ["dust swirls", 2],
  741: ["foggy", 0],
  751: ["sandy", 0],
  761: ["dusty", 0],
  762: ["volcanic ash", 1],
  771: ["squalls", 2],
  781: ["tornados", 2],
  800: ["clear skies", 2],
  801: ["partly cloudy", 0],
  802: ["scattered clouds", 2],
  803: ["broken clouds", 2],
  804: ["overcast", 0],
};

title("Weather");

intent(
  "(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|)",
  "(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|) in $(LOC)",
  "(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|) (will be|was|) (on|) $(DATE)",
  "(what) (is|) (the|) $(QUERY weather|temperature|humidity|pressure) (like|) in $(LOC) (will be|was|) (on|) $(DATE)",
  "(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool)",
  "(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool) in $(LOC)",
  "(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool) (on|) $(DATE)",
  "(is it|will it|is it going to) $(QUERY raining|rain|hot|warm|cold|chilly|cool) in $(LOC) (will be|was|) (on|) $(DATE)",
  (p) => {
    p.state.query = p.QUERY.value;
    if (p.LOC) {
      p.state.location = p.LOC.value;
    }
    if (p.DATE) {
      p.state.date = p.DATE;
    }
    playWeather(p);
  }
);

follow(
  "(What is|is it|) (the|) $(QUERY weather|temperature|humidity|pressure|raining)",
  (p) => {
    p.state.query = p.QUERY.value;
    playWeather(p);
  }
);

follow("(And|) (what about|on|) $(DATE)", (p) => {
  p.state.date = p.DATE;
  playWeather(p);
});

follow("(What|and|) (is|) (in|at|about|) $(LOC)", (p) => {
  p.state.location = p.LOC.value;
  playWeather(p);
});

follow(
  "(units|) (to|) (in|) $(UNITS metric|standard|imperial|celsius|fahrenheit)",
  (p) => {
    const units = p.UNITS.value.toLowerCase();
    p.state.units = getUnits(units);
    playWeather(p);
  }
);

follow("(Where|What place)", (p) => {
  p.play(
    p.state.location ? `(in|) ${p.state.location}` : "Sorry, I don't know"
  );
});

follow("(When|What time)", (p) => {
  p.play(p.state.date ? `${p.state.date}` : "Now");
});

follow("Thank you", (p) => {
  p.play("You are welcome!");
});


const getLocationCtx = context(() => {
  follow("(it's|for|in|at|on|) $(LOC)", (p) => {
    p.resolve(p.LOC.value);
  });
  follow(
    "(I|) don't know",
    "(what) (can|should|must|) (I|we|) (to|) (say|point|tell)",
    (p) => {
      p.play("The weather in what place are you interested in?");
    }
  );
  fallback("(Please,|) (provide a|in what|point the) location");
});

async function playWeather(p) {
  const now = api.moment().tz(p.timeZone);
  const date = p.state.date ? api.moment(p.state.date.date, p.timeZone) : now;
  const isToday = isDateToday(date, p.timeZone);
  const units = p.state.units || "imperial";

  if (!p.state.location) {
    p.state.location = await getLocation(p);
  }

  const weatherUrl = `${
    isToday ? WEATHER_URL : FORECAST_URL
  }&units=${units}&q=${p.state.location}`;

  if (!isToday) {
    if (date.isBefore(api.moment(now).hours(0).minutes(0))) {
      p.play("Sorry, I do not know what was the weather in the past.");
      return;
    } else if (date.isAfter(api.moment(now).add(5, "days"))) {
      p.play("Sorry, I can guess weather within 5 days only.");
      return;
    }
  }

  let response;

  try {
    response = await api.axios.get(weatherUrl);
  } catch (error) {
    const code = error.response.status;

    p.play(`Could not get weather information for ${p.state.location}`);

    if (code === 404) {
      p.state.location = null;
    } else {
      console.log(`failed to get weather: ${error}, code: ${code}`);
    }
    return;
  }

  if (isToday) {
    playToday(p, response.data);
  } else {
    playForecast(p, response.data);
  }
}

function playForecast(p, data) {
  let tempMin;
  let tempMax;
  let wind;
  let pressure;
  let humidity;
  let rain = false;
  const desc = {};
  const icon = {};
  const dt = api.moment(p.state.date.date).format("YYYY-MM-DD");

  const query = p.state.query || "weather";
  const units = p.state.units || "imperial";

  data.list.forEach((item) => {
    if (item.dt_txt.includes(dt)) {
      return;
    }

    tempMin = Math.min(
      isFinite(tempMin) ? tempMin : item.main.temp,
      item.main.temp
    );
    tempMax = Math.max(
      isFinite(tempMax) ? tempMax : item.main.temp,
      item.main.temp
    );
    wind = Math.max(isFinite(wind) ? wind : item.wind.speed, item.wind.speed);
    pressure = Math.max(
      isFinite(pressure) ? pressure : item.main.pressure,
      item.main.pressure
    );
    humidity = Math.max(
      isFinite(humidity) ? humidity : item.main.humidity,
      item.main.humidity
    );

    const { id, description } = item.weather[0];

    if (description.includes("rain")) {
      rain = true;
    }

    desc[id] = desc.hasOwnProperty(id) ? desc[id] + 1 : 1;
    icon[id] = item.weather[0].icon;
  });

  let max = 0;

  let frequentWeatherId;

  Object.keys(desc).forEach((id) => {
    const count = desc[id];
    if (max < count) {
      max = count;
      frequentWeatherId = id;
    }
  });

  showWeatherReport(p, units, {
    name: data.city.name,
    icon: icon[frequentWeatherId],
    desc: DESCRIPTION[frequentWeatherId][0],
    wind_speed: wind,
    temp: tempMax,
    humidity,
    pressure,
  });

  switch (query) {
    case "rain":
    case "raining":
      if (rain) {
        p.play(
          `Yes, ${p.state.date} in ${p.state.location} we are expecting a rain`,
          "Yes, don't forget to take an umbrella!"
        );
      } else {
        const on = p.state.date.indexOf(" ") === -1 ? "" : "on";
        p.play(
          `(No,| as I know) it will not be raining in ${p.state.location} ${on} ${p.state.date}`
        );
      }
      break;
    case "temperature":
      p.play(
        `The temperature will be from ${Math.floor(tempMin)} to ${Math.floor(
          tempMax
        )} ${getDegrees(units)} degrees`
      );
      break;
    case "humidity":
      p.play(`The humidity in ${p.state.location} will be ${humidity} %`);
      break;
    case "pressure":
      p.play(`The pressure in ${p.state.location} will be ${pressure} hPa`);
      break;
    case "weather":
      p.play(
        description(
          frequentWeatherId,
          tempMin,
          tempMax,
          p.state.location,
          units,
          false
        )
      );
      break;
  }
}

function playToday(p, data) {
  const weatherDescription = data.weather[0].description;
  const query = p.state.query || "weather";
  const units = p.state.units || "imperial";

  showWeatherReport(p, units, {
    name: data.name,
    icon: data.weather[0].icon,
    desc: weatherDescription,
    wind_speed: data.wind.speed,
    humidity: data.main.humidity,
    temp: data.main.temp,
    pressure: data.main.pressure,
  });

  switch (query) {
    case "rain":
    case "raining":
      if (weatherDescription.includes("rain")) {
        p.play("Yes, it's raining now. Don't forget to take an umbrella!");
      } else {
        p.play("(No|You are lucky), it's not raining now");
      }
      break;
    case "temperature":
      p.play(
        `The temperature is ${Math.floor(data.main.temp)} ${getDegrees(
          units
        )} degrees in ${data.name}`
      );
      break;
    case "humidity":
      p.play(`The humidity is ${data.main.humidity}% in ${data.name}`);
      break;
    case "pressure":
      p.play(`The pressure is ${data.main.pressure} hPa in ${data.name}`);
      break;
    case "weather":
      p.play(
        description(
          data.weather[0].id,
          data.main.temp,
          data.main.temp,
          p.state.location,
          units,
          true
        )
      );
      break;
  }
}

function showWeatherReport(p, units, weatherData) {
  p.play({
    embeddedPage: true,
    page: "weather.html",
    command: "showWeather",
    weatherData,
    units,
  });
}

function description(
  id,
  temperatureMin,
  temperatureMax,
  location,
  units,
  isToday
) {
  const description = DESCRIPTION[id][0];
  const prefixIndex = DESCRIPTION[id][1];

  const temperature = isToday ? Math.floor(temperatureMin)
    : temperatureMin === temperatureMax ? Math.floor(temperatureMin)
    : "from " + Math.floor(temperatureMin);

  const prefix = isToday ? PREFIX_TODAY[prefixIndex]
    : PREFIX_FORECAST[prefixIndex];

  const degreePrefix = prefixIndex > 0 ? "it's" : "";

  return `${prefix} ${description} and ${degreePrefix} ${temperature} degrees ${getDegrees(
    units
  )} in ${location}`;
}

function getDegrees(units) {
  const unitsValue = units.toLowerCase();
  switch (unitsValue) {
    case "metric":
      return "Celsius";
    case "imperial":
      return "Fahrenheit";
    default:
      return "Kelvin";
  }
}

function getUnits(units) {
  const unitsValue = units.toLowerCase();
  switch (unitsValue) {
    case "celsius":
      return "metric";
    case "fahrenheit":
      return "imperial";
    default:
      return unitsValue;
  }
}

function isDateToday(date, timeZone) {
  return (
    !date ||
    api.moment().tz(timeZone).format(DATE_FORMAT) ===
      api.moment(date, timeZone).format(DATE_FORMAT)
  );
}

function getLocation(p) {
  if (p.state.location) {
    return Promise.resolve(p.state.location);
  }
  p.play("Where?", "I need your location");
  return p.then(getLocationCtx);
}