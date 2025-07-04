import { Request, Response } from "express";
interface ResponseBody {
  message: string;
  status: boolean;
}
export const defaultHandler = async (
  req: Request,
  res: Response<ResponseBody>,
) => {
  try {
    res.status(200).json({ message: "Index route", status: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Unknow error,please try again later", status: false });
  }
};
