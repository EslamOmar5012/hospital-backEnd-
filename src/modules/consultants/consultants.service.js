import { db } from "../../db/index.js";
import { apiHandler, handleApiError } from "../../utils/index.js";

// Get all consaltants with pagination
export const getConsaltants = async (req, res, next) => {
  const selectconsaltantsCount = "SELECT COUNT(*) AS total FROM consaltants";
  const selectconsaltantsQuery = "SELECT * FROM consaltants LIMIT ?, ?";
  const { page = 1, limit = 10 } = req.query;
  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 10;
  const offset = (pageNum - 1) * limitNum;

  try {
    const [countRows] = await db.execute(selectconsaltantsCount);
    const total =
      countRows[0] && (countRows[0].total ?? countRows[0]["COUNT(*)"])
        ? Number(countRows[0].total ?? countRows[0]["COUNT(*)"])
        : 0;
    const totalPageNum = Math.ceil(total / limit);
    const [results] = await db.execute(selectconsaltantsQuery, [
      offset,
      limitNum,
    ]);

    return apiHandler(
      res,
      200,
      "success",
      "consultants have been returned successfully",
      { total, totalPageNum, results }
    );
  } catch (error) {
    throw error;
  }
};

//get one consaltant with id
export const getOneConsaltant = async (req, res, next) => {
  const { id = 0 } = req.params;
  const selectQuery = "SELECT * FROM consaltants WHERE c_id=?";
  const id_number = Number(id);

  try {
    const [consaltunt] = await db.execute(selectQuery, [id_number]);
    console.log(consaltunt.length);
    if (consaltunt.length === 0)
      throw handleApiError("there is no user with this ID", 404, true);

    return apiHandler(
      res,
      200,
      "success",
      "consultant has been returned successfully",
      { consaltunt: consaltunt[0] }
    );
  } catch (error) {
    throw error;
  }
};

//create consaltant

const checkbodyprops = (req) => {
  const { name } = req.body;
  if (!name) throw handleApiError("no name for consultant", 401, true);
};

export const createConsultant = async (req, res, next) => {
  const { name } = req.body;
  const insertQuery = "INSERT INTO consaltants (c_name) VALUES (?);";
  try {
    checkbodyprops(req);
    const [result] = await db.execute(insertQuery, [name]);
    return apiHandler(
      res,
      201,
      "success",
      "consaltant has been created successfully"
    );
  } catch (error) {
    throw error;
  }
};

//edit consaltant name

const checkIfConsaltantExist_id = async (id) => {
  const selectQuery = "SELECT * FROM consaltants WHERE c_id = ?";
  try {
    const [result] = await db.execute(selectQuery, [id]);
    if (!result.length)
      throw handleApiError("there is user with this id", 404, true);
  } catch (error) {
    throw error;
  }
};

export const editConsultant = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const updateQuery = "UPDATE consaltants SET c_name = ? WHERE c_id = ?";
  try {
    checkbodyprops(req);
    await checkIfConsaltantExist_id(id);
    const [result] = await db.execute(updateQuery, [name, id]);
    return apiHandler(
      res,
      201,
      "success",
      "consultants has been edited successfully"
    );
  } catch (error) {
    throw error;
  }
};

//delete consultant
export const deleteConsultant = async (req, res, next) => {
  const { id } = req.params;
  const deleteQuery = "DELETE FROM consaltants WHERE c_id = ?";
  const id_number = Number(id);
  try {
    await checkIfConsaltantExist_id(id);
    const [result] = await db.execute(deleteQuery, [id_number]);
    return apiHandler(res, 200, "success", "user created successfully");
  } catch (error) {
    throw error;
  }
};
