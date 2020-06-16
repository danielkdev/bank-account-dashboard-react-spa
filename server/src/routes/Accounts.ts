import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import AccountDao from "@daos/Account/AccountDao.mock";
import { paramMissingError } from "@shared/constants";

// Init shared
const router = Router();
const accountDao = new AccountDao();

/******************************************************************************
 *                      Get All Accounts - "GET /api/account/"
 ******************************************************************************/

router.get("/all", async (req: Request, res: Response) => {
  const accounts = await accountDao.getAll();
  return res.status(OK).json([...accounts]);
});

/******************************************************************************
 *                      Get  Account - "GET /api/account/:id"
 ******************************************************************************/

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const account = await accountDao.getOne(parseInt(id));
  return res.status(OK).json({ ...account });
});

/******************************************************************************
 *                      Get Account Transcations- "GET /api/account/:id/transcations"
 ******************************************************************************/

router.get("/:id/transcations", async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const transcations = await accountDao.getTransections(parseInt(id));
  return res.status(OK).json({ ...transcations });
});

/******************************************************************************
 *                      Get Account Balance- "GET /api/account/:id/balance"
 ******************************************************************************/

router.get("/:id/balance", async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const acount = await accountDao.getOne(parseInt(id));
  return res.status(OK).json({ balance: acount?.balance });
});

/******************************************************************************
 *                       Add Account - "POST /api/account/"
 ******************************************************************************/

router.post("/", async (req: Request, res: Response) => {
  const { account } = req.body;
  if (!account) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await accountDao.add(account);
  return res.status(CREATED).end();
});

/******************************************************************************
 *                       Update - "PUT /api/account/update"
 ******************************************************************************/

router.put("/update", async (req: Request, res: Response) => {
  const { account } = req.body;
  if (!account) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  account.id = Number(account.id);
  await accountDao.update(account);
  return res.status(OK).end();
});

/******************************************************************************
 *                    Delete - "DELETE /api/account/delete/:id"
 ******************************************************************************/

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  await accountDao.delete(Number(id));
  return res.status(OK).end();
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
