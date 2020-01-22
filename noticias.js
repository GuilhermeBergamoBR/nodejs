const http = require("http");
const server = http
  .createServer((req, res) => {
    let rota = req.url;
    let request = req;
    if (rota == "/tecnologia") {
      console.log(req.data);
      res.end("<html><body>A</body></html>");
    } else if (rota == "/moda") {
      res.end("<html><body>B</body></html>");
    } else if (rota == "/economia") {
      res.end("<html><body>C</body></html>");
    } else {
      res.end("<html><body>vc esta na romi.</body></html>");
    }
  })
  .listen(3002);
