export const updateInfo = (newData, oldData) => {
  return {
    firstName: newData.firstName ?? oldData.firstName,
    lastName: newData.lastName ?? oldData.lastName,
    degree: newData.degree ?? oldData.degree,
    password: newData.newPassword ?? oldData.password,
  };
};
