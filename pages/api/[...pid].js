export default function handler(req, res) {
  const { pid } = req.query
  fetch(pid.join("/"))
    .then(response => response.text())
    .then(text => {
      res.status(200).send(text)
    })
    .catch(err => console.log(err));
}
