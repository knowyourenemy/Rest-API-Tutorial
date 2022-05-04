import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) {
    console.log("no access token");
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  if (decoded) {
    res.locals.user = decoded;
    console.log("decoded successfully");
    console.log("current decoded user is", decoded);
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }

    const result = verifyJwt(newAccessToken as string);
    console.log("new decoded user is, ", result.decoded);
    res.locals.user = result.decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
