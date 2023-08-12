export interface IReviewApi {
  rewiew: IReview[] | [];
  total: number;
  message: string;
}

export interface IReview {
  stars: number;
  reviewText: string;
  name: string;
  imgUrl: string;
  _id: string;
}

export interface IReviewToSend {
  stars: number;
  reviewText: string;
}