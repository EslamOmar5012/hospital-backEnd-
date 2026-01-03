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
