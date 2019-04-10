const Box = require('../model/Box');

class BoxController {
  async store(req, res) {
    // como eu tenho apenas o title no req.body, eu posso passar direto.
    const box = await Box.create(req.body);

    // ou
    // const box = await Box.create({ title: req.body.title });

    return res.send(box);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();