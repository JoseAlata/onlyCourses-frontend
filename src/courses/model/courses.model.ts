import { CourseModel } from './courses.model.types';

export class Course implements CourseModel {
  banner: string = '';
  benefits: string = '';
  category: string = '';
  description: string = '';
  discount: number = 0;
  filesCount: string = '';
  language: string = '';
  name: string = '';
  price: number = 0;
  rating: number = 0;
  resume: string = '';
  targetPublic: string = '';

  public constructor(course: CourseModel) {
    Object.assign(this, { ...course });
  }

  public get hasDiscount(): boolean {
    return this.discount > 0;
  }

  public get priceWithDiscount(): number {
    return this.price - (this.price * this.discount) / 100;
  }

  public get ratingPercentage(): number {
    return (this.rating * 100) / 5;
  }

  public get ratingPercentageString(): string {
    return `${this.ratingPercentage}%`;
  }
}
