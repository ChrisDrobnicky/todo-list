const generateID = () => {
  let savedID = Number(localStorage.getItem('taskID'));
  savedID ? savedID += 1 : savedID = 1;
  localStorage.setItem('taskID', savedID);
  return savedID;
}

export const saveNewTask = name => {
  const taskToSave = {
    title: name,
    isDone: false,
    id: generateID()
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
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = savedTasks.filter(task => task.id !== taskID);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTasks;
}

export const getTasks = () => {
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));
  return savedTasks ? savedTasks : [];
}
