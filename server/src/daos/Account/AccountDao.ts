import { IAccount } from "@entities/Account";

export interface IAccountDao {
  getOne: (id: number) => Promise<IAccount | null>;
  getAll: () => Promise<IAccount[]>;
  add: (user: IAccount) => Promise<void>;
  update: (user: IAccount) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

class UserDao implements IAccountDao {
  /**
   * @param email
   */
  public async getOne(id: number): Promise<IAccount | null> {
    // TODO
    return [] as any;
  }

  /**
   *
   */
  public async getAll(): Promise<IAccount[]> {
    // TODO
    return [] as any;
  }

  /**
   *
   * @param user
   */
  public async add(user: IAccount): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param user
   */
  public async update(user: IAccount): Promise<void> {
    // TODO
    return {} as any;
  }

  /**
   *
   * @param id
   */
  public async delete(id: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

export default UserDao;
