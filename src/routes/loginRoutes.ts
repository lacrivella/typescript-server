import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    // returning nothing so don't write return next();
    next();
    return;
  }
  res.status(403);
  res.send('Not Permitted');
}

const router = Router();

export { router };
