import { Router } from "express";
import AccountRouter from "./Accounts";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/account", AccountRouter);

// Export the base-router
export default router;
