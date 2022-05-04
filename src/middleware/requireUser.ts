import { Request, Response, NextFunction } from "express";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("requiring user");
  const user = res.locals.user;
  //   console.log(user);
  if (!user) {
    return res.sendStatus(403);
  }

  return next();
};

export default requireUser;
