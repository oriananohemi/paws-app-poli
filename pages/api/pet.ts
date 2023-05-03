import type { NextApiRequest, NextApiResponse } from "next";

export type Pet = {
  name: string;
  age: string;
  type: string;
  color: string;
  weight: string;
  picture: string;
};

type MedicalData = {
  vetName: string;
  allergies: string;
  vaccines: string;
  dewormer: Dewormer;
  procedures: MedicalProcedures;
};

type Dewormer = {
  external: string;
  internal: string;
};

type MedicalProcedures = {
  vet: string;
  disease: string;
  exam: string;
  results: string;
  recommendations: string;
  date: string;
  picture: string;
};

type FeedingData = {
  brand: string;
  snack: string;
  schedule: string;
  allergies: string;
  picture: string;
};

type ShowerData = {
  shampoo: string;
  allergies: string;
  brused: string;
  calendar: string;
  picture: string;
  recommendation: string;
};

type Response = {
  code: number;
  message: string;
  data?: Pet;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  switch (req.method) {
    case "GET":
      getPet(req, res);
      break;
    case "POST":
      updatePet(req, res);
      break;

    default:
      res.status(404).json({
        code: 404,
        message: "Not found",
      });
      break;
  }
}

const getPet = (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const data: Pet = {
    name: "Ramón",
    age: "5",
    type: "canino",
    color: "blanco",
    weight: "30Kg",
    picture: "http:imagen...",
  };
  res.status(200).json({
    code: 200,
    message: "get pet successfully",
    data,
  });
};

const updatePet = (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const data: Pet = {
    name: "Ramón",
    age: "5",
    type: "canino",
    color: "blanco",
    weight: "30Kg",
    picture: "http:imagen...",
  };
  res.status(200).json({
    code: 200,
    message: "pet updated successfully",
    data,
  });
};
