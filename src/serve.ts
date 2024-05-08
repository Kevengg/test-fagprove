import app from "./app";

const port: string | number = process.env.APP_PORT || 3001;

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
