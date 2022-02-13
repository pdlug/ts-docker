import express, { Request, Response } from "express";
import casual from "casual";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const HOST = process.env.HOST ?? "0.0.0.0";

const app = express();

type GetUserRequest = Request<{
  userId: string;
}>;

type GetUserResponse = Response<{
  user: {
    id: string;
    name: string;
  };
}>;

app.get("/users/:userId", (req: GetUserRequest, res: GetUserResponse) => {
  const { userId } = req.params;
  res.json({ user: { id: userId, name: casual.full_name } });
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Running on http://${HOST}:${PORT}`);
});
