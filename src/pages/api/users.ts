import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Luan" },
    { id: 2, name: "Luiz" },
    { id: 3, name: "Valéria" },
    { id: 4, name: "Ruy" },
  ];

  return response.json(users);
};
