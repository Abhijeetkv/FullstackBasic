import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready');

// });

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'this is a joke'
        },
        {
            id: 3,
            title: ' third Joke',
            content: 'this is a third joke'
        },
        {
            id: 4,
            title: ' fourth Joke',
            content: 'this is fourth joke'
        },
        {
            id: 5,
            title: ' fifth Joke',
            content: 'this is fifth joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);

})