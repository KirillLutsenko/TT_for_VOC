export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

export const changeFirstName = newFirstName => ({
  type: ACTION_CHANGE_FIRST_NAME,
  payload: newFirstName,
});

export const changeSecondName = newSecondName => ({
  type: ACTION_CHANGE_SECOND_NAME,
  payload: newSecondName,
});
