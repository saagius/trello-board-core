import { CreateBoardDto } from '../dtos/boards.dto';
import HttpException from '../exceptions/HttpException';
import { Board } from '../interfaces/boards.interface';
import boardModel from '../models/boards.model';
import { isEmptyObject } from '../utils/util';

class BoardService {
  public boards = boardModel;

  public async findAllBoards(): Promise<Board[]> {
    const boards: Board[] = await this.boards.find();
    return boards;
  }

  public async findBoardById(boardId: string): Promise<Board> {
    const findBoard: Board = await this.boards.findById(boardId);
    if (!findBoard) throw new HttpException(409, "You're not board");

    return findBoard;
  }

  public async createBoard(boardData: CreateBoardDto): Promise<Board> {
    if (isEmptyObject(boardData)) throw new HttpException(400, "You're not boardData");
    const createBoardData: Board = await this.boards.create({ ...boardData });
    return createBoardData;
  }

  public async updateBoard(boardId: string, boardData: Board): Promise<Board> {
    if (isEmptyObject(boardData)) throw new HttpException(400, "You're not boardData");

    const updateBoardById: Board = await this.boards.findByIdAndUpdate(boardId, { ...boardData });

    if (!updateBoardById) throw new HttpException(409, "You're not board");

    return updateBoardById;
  }

  public async deleteBoardData(boardId: string): Promise<Board> {
    const deleteBoardById: Board = await this.boards.findByIdAndDelete(boardId);
    if (!deleteBoardById) throw new HttpException(409, "You're not board");

    return deleteBoardById;
  }
}

export default BoardService;