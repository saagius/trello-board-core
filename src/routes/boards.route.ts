import { Router } from 'express';
import BoardsController from '../controllers/boards.controller';
import { CreateBoardDto } from '../dtos/boards.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class BoardsRoute implements Route {
  public path = '/boards';
  public router = Router();
  public boardsController = new BoardsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.boardsController.getBoards);
    this.router.get(`${this.path}/:id`, this.boardsController.getBoardById);
    this.router.post(`${this.path}`, validationMiddleware(CreateBoardDto), this.boardsController.createBoard);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateBoardDto, true), this.boardsController.updateBoard);
    this.router.delete(`${this.path}/:id`, this.boardsController.deleteBoard);
  }
}

export default BoardsRoute;