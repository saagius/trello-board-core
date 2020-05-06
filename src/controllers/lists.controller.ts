import { NextFunction, Request, Response } from 'express';
import { CreateListDto } from '../dtos/lists.dto';
import { List } from '../interfaces/lists.interface';
import listService from '../services/lists.service';

class ListsController {
  public listService = new listService();

  public getLists = async (req: Request, res: Response, next: NextFunction) => {
    const boardId: string = req.params.boardId;

    try {
      const findAllListsData: List[] = await this.listService.findAllLists(boardId);
      res.status(200).json({ success: true, data: findAllListsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getListById = async (req: Request, res: Response, next: NextFunction) => {
    const listId: string = req.params.id;

    try {
      const findOneListData: List = await this.listService.findListById(listId);
      res.status(200).json({ success: true, data: findOneListData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }

  public createList = async (req: Request, res: Response, next: NextFunction) => {
    const listData: CreateListDto = req.body;

    try {
      const createListData: List = await this.listService.createList(listData);
      res.status(201).json({ success: true, data: createListData, message: 'created' });
    } catch (error) {
      next(error);
    }
  }

  public updateList = async (req: Request, res: Response, next: NextFunction) => {
    const listId: string = req.params.id;
    const listData: List = req.body;

    try {
      const updateListData: List = await this.listService.updateList(listId, listData);
      res.status(200).json({ success: true, data: updateListData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  }

  public deleteList = async (req: Request, res: Response, next: NextFunction) => {
    const listId: string = req.params.id;

    try {
      const deleteListData: List = await this.listService.deleteListData(listId);
      res.status(200).json({ success: true, data: deleteListData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export default ListsController;
