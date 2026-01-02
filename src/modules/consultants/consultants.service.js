import { db } from "../../db/index.js";
import { apiHandler } from "../../utils/index.js";

// Get all consaltants with pagination
export const getConsultants = async (req, res, next) => {
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
