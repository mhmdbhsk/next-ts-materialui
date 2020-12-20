import { NextApiRequest, NextApiResponse } from 'next';

const users = [
  { id: 1, name: 'Azra' },
  { id: 2, name: 'Aku' },
  { id: 3, name: 'Bhaska' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(users);
};
