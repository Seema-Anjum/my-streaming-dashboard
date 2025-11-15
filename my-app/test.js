const https = require("https");

https.get("https://api.themoviedb.org/3/movie/popular?api_key=YOUR_KEY", res => {
  console.log("STATUS:", res.statusCode);
  res.on("data", d => process.stdout.write(d));
}).on("error", err => {
  console.error("NODE HTTPS ERROR:", err);
});
