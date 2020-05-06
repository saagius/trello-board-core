import { NextFunction, Request, Response } from 'express';
import { CreateCardDto } from '../dtos/cards.dto';
import { Card } from '../interfaces/cards.interface';
import cardService from '../services/cards.service';

class CardsController {
  public cardService = new cardService();

  public getCards = async (req: Request, res: Response, next: NextFunction) => {
    const listId: string = req.params.listId;

    try {
      const findAllCardsData: Card[] = await this.cardService.findAllCards(listId);
      res.status(200).json({ success: true, data: findAllCardsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getCardById = async (req: Request, res: Response, next: NextFunction) => {
    const cardId: string = req.params.id;

    try {
      const findOneCardData: Card = await this.cardService.findCardById(cardId);
      res.status(200).json({ success: true, data: findOneCardData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }

  public createCard = async (req: Request, res: Response, next: NextFunction) => {
    const cardData: CreateCardDto = req.body;

    try {
      const createCardData: Card = await this.cardService.createCard(cardData);
      res.status(201).json({ success: true, data: createCardData, message: 'created' });
    } catch (error) {
      next(error);
    }
  }

  public updateCard = async (req: Request, res: Response, next: NextFunction) => {
    const cardId: string = req.params.id;
    const cardData: Card = req.body;

    try {
      const updateCardData: Card = await this.cardService.updateCard(cardId, cardData);
      res.status(200).json({ success: true, data: updateCardData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  }

  public deleteCard = async (req: Request, res: Response, next: NextFunction) => {
    const cardId: string = req.params.id;

    try {
      const deleteCardData: Card = await this.cardService.deleteCardData(cardId);
      res.status(200).json({ success: true, data: deleteCardData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export default CardsController;
