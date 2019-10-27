const random_jokes = [
  {
    setup: '11What is the object oriented way to get wealthy ?',
      punchline: 'Inheritance',
  },
  {
    setup: '22To understand what recursion is...',
    punchline: "You must first understand what recursion is",
  },
  {
    setup: '33What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];

let random_joke_call_count = 0;

export default {
  
  'get /dev/random_joke': function (req, res) {
    console.log("xxxxxxx********t101:", random_joke_call_count)
    console.log("xxxxxxx********t101:",random_jokes.length)
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  },
};