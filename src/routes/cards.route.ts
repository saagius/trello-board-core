import { Router } from 'express';
import CardsController from '../controllers/cards.controller';
import { CreateCardDto } from '../dtos/cards.dto';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class CardsRoute implements Route {
  public path = '/list/:listId/cards';
  public router = Router();
  public cardsController = new CardsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.cardsController.getCards);
    this.router.get(`${this.path}/:id`, this.cardsController.getCardById);
    this.router.post(`${this.path}`, validationMiddleware(CreateCardDto), this.cardsController.createCard);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateCardDto, true), this.cardsController.updateCard);
    this.router.delete(`${this.path}/:id`, this.cardsController.deleteCard);
  }
}

export default CardsRoute;