export interface IResponse {
  status: number;
  result: { accessToken: string; refreshToken: string };
}
