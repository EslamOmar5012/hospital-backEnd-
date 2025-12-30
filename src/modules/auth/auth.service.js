//for development purpose
export const devState = (req, res, next) => {
  return res.status(200).json({
    status: "under development (auth)",
    message: "this api is under development (auth section)",
  });
};

//add new admin logic

export const checkAdminFormatData = (req, res, next) => {};

export const checkIfAdminExists = (req, res, next) => {};

export const registerAdmin = (req, res, next) => {};
