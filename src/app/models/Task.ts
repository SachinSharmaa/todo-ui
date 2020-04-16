export interface Task {
  id: string;
  name: string;
  description: string;
  username: string;
  done: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
