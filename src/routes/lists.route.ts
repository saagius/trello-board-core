import { Router } from 'express';
import ListsController from '../controllers/lists.controller';
import { CreateListDto } from '../dtos/lists.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class ListsRoute implements Route {
  public path = '/board/:boardId/lists';
  public router = Router();
  public listsController = new ListsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.listsController.getLists);
    this.router.get(`${this.path}/:id`, this.listsController.getListById);
    this.router.post(`${this.path}`, validationMiddleware(CreateListDto), this.listsController.createList);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateListDto, true), this.listsController.updateList);
    this.router.delete(`${this.path}/:id`, this.listsController.deleteList);
  }
}

export default ListsRoute;