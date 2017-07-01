export const saveNewTask = name => {
  const taskToSave = {
    title: name,
    isDone: false
  };
  let savedTasks = JSON.parse(localStorage.getItem('tasks'));

  if (savedTasks) {
    savedTasks.push(taskToSave);
  } else {
    savedTasks = [taskToSave];
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
};
