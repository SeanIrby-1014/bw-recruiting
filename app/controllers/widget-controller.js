import layout from '../views/layout.js';
import form from '../views/form.js';
import Widget from '../models/widget.js';
import listPage from '../views/list.js';

export default {
  async index(req, res) {
    const widgets = await Widget.findAll();
    return res.send(layout({ title: 'Widgets', widgets }, listPage));
  },

  new(req, res) {
    const widget = new Widget();
    return res.send(layout({ title: 'New Widget', widget }, form));
  },

  async create(req, res) {
    const widget = new Widget(req.body);
    await widget.save();
    return res.redirect('/');
  },

  async edit(req, res) {
    const widget = await Widget.find(req.params.id);
    return res.send(layout({ title: `Widget #${widget.id}`, widget }, form));
  },

  async update(req, res) {
    const widget = await Widget.find(req.params.id);
    widget.update(req.body);
    await widget.save();
    return res.redirect('/');
  },
};
