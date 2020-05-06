import { NextFunction, Request, Response } from 'express';
import { CreateBoardDto } from '../dtos/boards.dto';
import { Board } from '../interfaces/boards.interface';
import boardService from '../services/boards.service';

class BoardsController {
  public boardService = new boardService();

  public getBoards = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllBoardsData: Board[] = await this.boardService.findAllBoards();
      res.status(200).json({ success: true, data: findAllBoardsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public getBoardById = async (req: Request, res: Response, next: NextFunction) => {
    const boardId: string = req.params.id;

    try {
      const findOneBoardData: Board = await this.boardService.findBoardById(boardId);
      res.status(200).json({ success: true, data: findOneBoardData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }

  public createBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardData: CreateBoardDto = req.body;

    try {
      const createBoardData: Board = await this.boardService.createBoard(boardData);
      res.status(201).json({ success: true, data: createBoardData, message: 'created' });
    } catch (error) {
      next(error);
    }
  }

  public updateBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardId: string = req.params.id;
    const boardData: Board = req.body;

    try {
      const updateBoardData: Board = await this.boardService.updateBoard(boardId, boardData);
      res.status(200).json({ success: true, data: updateBoardData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  }

  public deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
    const boardId: string = req.params.id;

    try {
      const deleteBoardData: Board = await this.boardService.deleteBoardData(boardId);
      res.status(200).json({ success: true, data: deleteBoardData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export default BoardsController;
