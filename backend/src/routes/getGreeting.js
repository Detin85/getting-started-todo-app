const GREETING = 'Hello world!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};



const GREETINGS = [
    "Whalecome!",
    "All hands on deck!",
    "Charting the course ahead!",
];


