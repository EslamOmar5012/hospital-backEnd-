import { db } from "../../db/index.js";
import { apiHandler, handleApiError } from "../../utils/index.js";

// Get all nurses with pagination
export const getNurses = async (req, res, next) => {
  const selectNursesCount = "SELECT COUNT(*) AS total FROM nurses";
  const selectNursesQuery = "SELECT * FROM nurses LIMIT ?, ?";
  const { page = 1, limit = 10 } = req.query;
  const pageNum = Number(page) || 1;
  const limitNum = Number(limit) || 10;
  const offset = (pageNum - 1) * limitNum;

  try {
    const [countRows] = await db.execute(selectNursesCount);
    const total =
      countRows[0] && (countRows[0].total ?? countRows[0]["COUNT(*)"])
        ? Number(countRows[0].total ?? countRows[0]["COUNT(*)"])
        : 0;
    const totalPageNum = Math.ceil(total / limit);
    const [results] = await db.execute(selectNursesQuery, [offset, limitNum]);

    return apiHandler(
      res,
      200,
      "success",
      "Nurses have been returned successfully",
      { total, totalPageNum, results }
    );
  } catch (error) {
    throw error;
  }
};

//get one nurse with id
export const getOneNurse = async (req, res, next) => {
  const { id = 0 } = req.params;
  const selectQuery = "SELECT * FROM nurses WHERE n_number=?";
  const id_number = Number(id);

  try {
    const [nurse] = await db.execute(selectQuery, [id_number]);
    console.log(nurse.length);
    if (nurse.length === 0)
      throw handleApiError("there is no nurse with this ID", 404, true);

    return apiHandler(
      res,
      200,
      "success",
      "nurse has been returned successfully",
      { nurse: nurse[0] }
    );
  } catch (error) {
    throw error;
  }
};

// create nurse
const checkbodyprops = (req) => {
  const { name, address, ward_id = 3 } = req.body;
  if (!name || !address) throw handleApiError("missing nurse data", 401, true);
};

const checkIfWardExist = async (ward_id) => {
  const selectQuery = "Select w_id from wards";
  const [results] = await db.execute(selectQuery);
  const ward_idFound = results.find((id) => id.w_id === ward_id);
  if (!ward_idFound) throw handleApiError("there is no ward with this id");
};

export const createNurse = async (req, res, next) => {
  const { name, address, ward_id = 3 } = req.body;
  const insertQuery =
    "INSERT INTO nurses (n_name, n_address, ward_id) VALUES (?, ?, ?);";
  try {
    checkbodyprops(req);
    await checkIfWardExist(ward_id);
    const [result] = await db.execute(insertQuery, [
      name,
      address,
      Number(ward_id),
    ]);
    return apiHandler(
      res,
      201,
      "success",
      "nurse has been created successfully"
    );
  } catch (error) {
    throw error;
  }
};
