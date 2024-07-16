import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Failed to create account');
    }
  }
  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to create account');
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite Service :: getCurrentUser :: error', error);
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSession();
    } catch (error) {
      console.log('Appwrite Service :: logOut :: error', error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
