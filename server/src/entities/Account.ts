export interface IAccount {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  created: string;
  balance: number;
  transactions: Array<ITransaction>;
}
export interface ITransaction {
  id: number;
  created: string;
  amount: number;
  type: string;
  description: string;
}
class Account implements IAccount {}

export default User;
