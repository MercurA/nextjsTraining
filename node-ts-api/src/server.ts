import app from './app';

app.listen(process.env.PORT, () => console.log(`Server is up on ${process.env.HOST}:${process.env.PORT}!!!`));