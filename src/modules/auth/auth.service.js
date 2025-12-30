import { hash } from "bcrypt";

import { db } from "../../db/index.js";
import ApiError from "../../utils/apiError.utils.js";

//for development purpose
export const devState = (req, res, next) => {
  return res.status(200).json({
    status: "under development (auth)",
    message: "this api is under development (auth section)",
  });
};
