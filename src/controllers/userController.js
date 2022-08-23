export const userController = {
  getAll: (req, res) => {
    res.status(200).json('Todos los usuarios');
  },

  getOne: (req, res) => {
    res.status(200).json('Un usuario en especifico');
  },

  createOne: (req, res) => {
    res.status(201).json('Creamos un usuario');
  },

  delete: (req, res) => {
    res.status(200).json('Borramos un usuario');
  },

  update: (req, res) => {
    res.status(200).json('Actualizamos un usuario');
  },
};
