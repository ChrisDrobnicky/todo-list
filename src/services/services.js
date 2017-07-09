const generateID = () => {
  let savedID = Number(localStorage.getItem('taskID'));
  savedID ? savedID += 1 : savedID = 1;
  localStorage.setItem('taskID', savedID);
  return savedID;
};

export const getTasks = () => {
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));
  return savedTasks ? savedTasks : [];
};

export const saveNewTask = (name, priority) => {
  const taskToSave = {
    title: name,
    isDone: false,
    id: generateID(),
    priority: priority
  };
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (savedTasks) {
    savedTasks.push(taskToSave);
  } else {
    savedTasks = [taskToSave];
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
  return savedTasks;
};

export const deleteTask = taskID => {
  const savedTasks = getTasks();
  const newTasks = savedTasks.filter(task => task.id !== taskID);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTasks;
};

export const toggleIsDone = taskID => {
  const savedTasks = getTasks();
  const newTasks = savedTasks.map(
    task => task.id !== taskID ? task : Object.assign({ ...task, isDone: !task.isDone })
  );
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTasks;
};
