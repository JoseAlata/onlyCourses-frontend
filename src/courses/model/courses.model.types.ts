export interface CourseModel {
  name: string;
  banner: string;
  category: string;
  resume: string;
  language: string;
  filesCount: string;
  rating: number;
  price: number;
  discount: number;
  benefits: string;
  targetPublic: string;
  description: string;

  readonly hasDiscount: boolean;
  readonly priceWithDiscount: number;
  readonly ratingPercentage: number;
  readonly ratingPercentageString: string;
}
