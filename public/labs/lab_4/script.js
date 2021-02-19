function onLoad() {
  console.log("script loaded");
}

window.onload = onLoad;

app.route("/api")
    .post(async (req, res) => {
        console.log('POST request detected');
        console.log('Form data in res.body', req.body);
        res.send("Hello Word");
    });