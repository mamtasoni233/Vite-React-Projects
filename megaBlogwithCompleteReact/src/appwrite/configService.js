import conf from '../conf/conf.js';
import { Client, ID, Databases, Query, Storage } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
      return true;
    } catch (error) {
      console.log('Appwrite Service :: updatePost :: error', error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log('Appwrite Service :: deletePost :: error', error);
    }
  }

  async getPost(slug) {
    try {
      const post = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return post;
    } catch (error) {
      console.log('Appwrite Service :: getPost :: error', error);
      return false;
    }
  }

  // queries
  async getAllPost(queries = [Query.equal('status', 'active')]) {
    try {
      const posts = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
      return posts;
    } catch (error) {
      console.log('Appwrite Service :: getAllPost :: error', error);
      return false;
    }
  }

  // file uploading method and service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite Service :: uploadFile :: error', error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log('Appwrite Service :: deleteFile :: error', error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      return this.handleError('getFilePreview', error);
    }
  }
  /**
   * Handles errors by logging and throwing them.
   * @param {string} methodName - The name of the method where the error occurred.
   * @param {Error} error - The error object.
   */
  handleError(methodName, error) {
    console.error(`Appwrite Service :: ${methodName} :: error`, error);
    throw error;
  }
}
const service = new Service();
export default service;
