import path from 'path';
import express from 'express';
import widgetController from './controllers/widget-controller.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/', widgetController.index);
app.post('/', widgetController.create);
app.get('/new', widgetController.new);

app.post('/:id', widgetController.update);
app.get('/:id', widgetController.edit);

export default app;
