import express from "express";
import BodyParser from "body-parser";

const { urlencoded, json } = BodyParser;

const tasksContainer = {
  tasks: [],
};

const app = express();

const badRequest = (res) =>
  res.status(400).json({
    message: "Bad request",
  });

const notFound = (res) =>
  res.status(404).json({
    message: "Not found",
  });

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.get("/tasks", (req, res) => res.status(200).json(tasksContainer));

app.get("/tasks/:id", (req, res) => {
  const id = +req.params.id;

  if (Number.isNaN(id)) return badRequest(res);

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    return res.status(200).json({
      task,
    });
  }

  return notFound(res);
});

app.patch("/tasks/:id", (req, res) => {
  const id = +req.params.id;

  if (Number.isNaN(id)) return badRequest(res);

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    task.title = req.body.title || task.title;
    task.description = req.body.description ?? task.description;
    task.done = req.body.done ?? task.done;

    return res.status(200).json({
      task,
    });
  }

  return notFound(res);
});

app.put("/tasks/:id", (req, res) => {
  const id = +req.params.id;

  if (Number.isNaN(id)) return badRequest(res);

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    task.title = req.body.title;
    task.description = req.body.description;
    task.done = req.body.done;

    return res.status(200).json({
      task,
    });
  }

  return notFound(res);
});

app.post("/tasks/:id/done", (req, res) => {
  const id = +req.params.id;

  if (Number.isNaN(id)) return badRequest(res);

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    task.done = true;
    return res.status(204).send();
  }

  return notFound(res);
});

app.delete("/tasks/:id/done", (req, res) => {
  const id = +req.params.id;

  if (Number.isNaN(id)) return badRequest(res);

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    task.done = false;
    return res.status(204).send();
  }

  return notFound(res);
});

app.post("/tasks", (req, res) => {
  const task = {
    id: tasksContainer.tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    done: false,
  };

  tasksContainer.tasks.push(task);

  return res.status(201).send();
});

app.delete("/tasks/:id", (req, res) => {
  const id = +req.params.id;

  if (Number.isNaN(id)) return badRequest(res);

  const task = tasksContainer.tasks.find((item) => item.id === id);

  if (task) {
    const taskIndex = tasksContainer.tasks;
    tasksContainer.tasks.splice(taskIndex, 1);
    return res.status(204).send();
  }

  return notFound(res);
});

app.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});
