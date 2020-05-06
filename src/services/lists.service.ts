import { CreateListDto } from '../dtos/lists.dto';
import HttpException from '../exceptions/HttpException';
import { List } from '../interfaces/lists.interface';
import listModel from '../models/lists.model';
import { isEmptyObject } from '../utils/util';

class ListService {
  public lists = listModel;

  public async findAllLists(boardId?: string): Promise<List[]> {
    const lists: List[] = await this.lists.find({board: boardId});
    return lists;
  }

  public async findListById(listId: string): Promise<List> {
    const findList: List = await this.lists.findById(listId);
    if (!findList) throw new HttpException(409, "You're not list");

    return findList;
  }

  public async createList(listData: CreateListDto): Promise<List> {
    if (isEmptyObject(listData)) throw new HttpException(400, "You're not listData");
    const createListData: List = await this.lists.create({ ...listData });
    return createListData;
  }

  public async updateList(listId: string, listData: List): Promise<List> {
    if (isEmptyObject(listData)) throw new HttpException(400, "You're not listData");

    const updateListById: List = await this.lists.findByIdAndUpdate(listId, { ...listData });

    if (!updateListById) throw new HttpException(409, "You're not list");

    return updateListById;
  }

  public async deleteListData(listId: string): Promise<List> {
    const deleteListById: List = await this.lists.findByIdAndDelete(listId);
    if (!deleteListById) throw new HttpException(409, "You're not list");

    return deleteListById;
  }
}

export default ListService;