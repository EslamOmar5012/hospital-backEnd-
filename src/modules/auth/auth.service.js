import { hash, compare } from "bcrypt";

import { db } from "../../db/index.js";

import { handleApiError, apiHandler } from "../../utils/index.js";

const emailRegix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegix =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//function to check that the data format is right and there is no missing data
const validateAdminData = (req, method = "signup") => {
  const { email, password } = req.body;
  if (!email || !password)
    throw handleApiError("missing password or email", 400, true);
  if (!email.match(emailRegix))
    throw handleApiError("wrong email format", 400, true);
  if (!password.match(passwordRegix) && method === "signup")
    throw handleApiError("wrong password format", 400, true);
};

//check if admin exist in data base
const checkIfAdminExist = async (email) => {
  const selectQuery = "SELECT a_email FROM admins where a_email = ?";
  const [results] = await db.execute(selectQuery, [email]);
  if (results.length > 0) throw handleApiError("user already exist", 409, true);
};

//add admin logic
export const registerAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  const insertQuery = "INSERT INTO admins (a_email,a_password) VALUES (?, ?)";
  try {
    validateAdminData(req);
    await checkIfAdminExist(email);
    const hashedPassword = await hash(password, 10);
    const [results] = await db.execute(insertQuery, [email, hashedPassword]);
    return apiHandler(res, 201, "success", "user has been created");
  } catch (error) {
    throw error;
  }
};

export const loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  const selectQuery = "SELECT * FROM admins WHERE a_email = ?";
  try {
    validateAdminData(req, "login");
    const [results] = await db.execute(selectQuery, [email]);
    if (!results.length)
      throw handleApiError("no admin with this email", 404, true);
    const checkPassword = await compare(password, results[0].a_password);
    if (checkPassword)
      return apiHandler(res, 200, "success", {
        id: results[0].a_id,
        email: results[0].a_email,
      });
    throw handleApiError("wrong password or email", 401, true);
  } catch (error) {
    throw error;
  }
};

export const logoutAdmin = async (req, res, next) => {
  return apiHandler(res, 200, "success", "looged out");
};
