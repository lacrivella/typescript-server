import { Request, Response } from 'express';

class RootController {
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>You must be logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }
}