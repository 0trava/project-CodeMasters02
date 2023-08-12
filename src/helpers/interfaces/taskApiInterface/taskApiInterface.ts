export interface ITaskApi {
  massege: string;
  tasks: ITask[] | [];
  total: number;
}

export interface ITask {
  title: string;
  start: string;
  end: string;
  date: string;
  _id: string;
  status: string;
  priority: string;
  owner: {
    email: string;
    name: string;
    _id: string;
  };
}
