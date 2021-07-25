export interface IApiResponse {
  status: number;
  data: any;
}

export class ApiResponse implements IApiResponse {
  status: number;
  data: any;

  constructor({ status, data }: IApiResponse) {
    this.status = status;
    this.data = data;
  }
}
