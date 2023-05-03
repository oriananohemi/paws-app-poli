import type { NextApiRequest, NextApiResponse } from "next";
import { Pet } from "./pet";

const data = {
  name: "Ana María Martinez",
  userName: "anamaria",
  cellphone: "300-0000000",
  email: "ana.martinez@prueba.com",
  password: "prueba1234",
  picture: "",
  pets: [],
};

type User = {
  name: string;
  userName: string;
  cellphone: string;
  email: string;
  password: string;
  picture?: string;
  pets: Pet[];
};

type Response = {
  code: number;
  message: string;
  data?: User;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  switch (req.method) {
    case "GET":
      getUser(req, res);
      break;
    case "POST":
      updateUser(req, res);
      break;

    default:
      res.status(404).json({
        code: 404,
        message: "Not found",
      });
      break;
  }
}

export const getUser = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  res.status(200).json({
    code: 200,
    message: "get user successfully",
    data,
  });
};

export const updateUser = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  res.status(200).json({
    code: 200,
    message: "user updated successfully",
    data,
  });
};
