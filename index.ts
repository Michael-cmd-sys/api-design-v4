import express from "express"

const app = express();
const PORT = process.env.PORT || 5000;

// TODO sanitize endpoint to render this route as invalid
app.route("/", (req, res) => {
  res.send("Hello World!!!\n You've successfully reached the home page")
});

// TODO: implement api endpoints
// app.use("/api", routes);

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}...`))
