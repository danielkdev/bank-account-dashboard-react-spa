import { IAccount, ITransaction } from "./../../entities/Account";
import { getRandomInt } from "@shared/functions";
import { MockDaoMock } from "../MockDb/MockDao.mock";
import { IAccountDao } from "./AccountDao";

class UserDao extends MockDaoMock implements IAccountDao {
  public async getOne(id: number): Promise<IAccount | null> {
    try {
      const db = await super.openDb();
      for (const account of db.accounts) {
        if (account.id === id) {
          return account;
        }
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  public async getTransections(id: number): Promise<ITransaction[] | null> {
    try {
      const db = await super.openDb();
      for (const account of db.accounts) {
        if (account.id === id) {
          return account.transactions;
        }
      }
      return null;
    } catch (err) {
      throw err;
    }
  }

  public async getAll(): Promise<IAccount[]> {
    try {
      const db = await super.openDb();
      return db.accounts;
    } catch (err) {
      throw err;
    }
  }

  public async add(account: IAccount): Promise<void> {
    try {
      const db = await super.openDb();
      account.id = getRandomInt();
      db.accounts.push(account);
      await super.saveDb(db);
    } catch (err) {
      throw err;
    }
  }

  public async update(account: IAccount): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.accounts.length; i++) {
        if (db.accounts[i].id === account.id) {
          db.accounts[i] = account;
          await super.saveDb(db);
          return;
        }
      }
      throw new Error("Account not found");
    } catch (err) {
      throw err;
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.accounts.length; i++) {
        if (db.accounts[i].id === id) {
          db.accounts.splice(i, 1);
          await super.saveDb(db);
          return;
        }
      }
      throw new Error("Account not found");
    } catch (err) {
      throw err;
    }
  }
}

export default UserDao;
