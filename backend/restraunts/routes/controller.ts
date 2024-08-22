import pool from "../../postgrssDB";
import { Request, Response } from "express";

type Props = (req: Request, res: Response) => Promise<any>;

const getRestraunt: Props = async (req, res) => {
  pool.query("SELECT * FROM restraunt", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
export default getRestraunt;
