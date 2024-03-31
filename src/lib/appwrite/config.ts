import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  project: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
};
export const client = new Client();
client
  .setEndpoint(appwriteConfig.url) // Your API Endpoint
  .setProject(appwriteConfig.project); // Your project ID

export const account = new Account(client);
export const storage = new Storage(client);
export const database = new Databases(client);
export const avatars = new Avatars(client);
