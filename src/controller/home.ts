import { Request, Response } from "express";
/**
 * GET /
 * Home page.
 */
const page = {
  title: "Welcome to E-Communication",
};

export let index = (req: Request, res: Response) => {
  return res.render("pgredirect.ejs", {
    page,
  });
};
