import { CreateCardDto } from '../dtos/cards.dto';
import HttpException from '../exceptions/HttpException';
import { Card } from '../interfaces/cards.interface';
import cardModel from '../models/cards.model';
import { isEmptyObject } from '../utils/util';

class CardService {
  public cards = cardModel;

  public async findAllCards(listId?: string): Promise<Card[]> {
    const cards: Card[] = await this.cards.find({list: listId});
    return cards;
  }

  public async findCardById(cardId: string): Promise<Card> {
    const findCard: Card = await this.cards.findById(cardId);
    if (!findCard) throw new HttpException(409, "You're not card");

    return findCard;
  }

  public async createCard(cardData: CreateCardDto): Promise<Card> {
    if (isEmptyObject(cardData)) throw new HttpException(400, "You're not cardData");
    const createCardData: Card = await this.cards.create({ ...cardData });
    return createCardData;
  }

  public async updateCard(cardId: string, cardData: Card): Promise<Card> {
    if (isEmptyObject(cardData)) throw new HttpException(400, "You're not cardData");

    const updateCardById: Card = await this.cards.findByIdAndUpdate(cardId, { ...cardData });

    if (!updateCardById) throw new HttpException(409, "You're not card");

    return updateCardById;
  }

  public async deleteCardData(cardId: string): Promise<Card> {
    const deleteCardById: Card = await this.cards.findByIdAndDelete(cardId);
    if (!deleteCardById) throw new HttpException(409, "You're not card");

    return deleteCardById;
  }
}

export default CardService;