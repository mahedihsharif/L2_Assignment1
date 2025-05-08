function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const finalResult: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      finalResult.push(arrays[i][j]);
    }
  }
  return finalResult;
}

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }
  getModel() {
    return `Model: ${this._model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return 0;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length > 0) {
    let heightPriceProduct: Product = products[0];

    for (let i = 0; i < products.length; i++) {
      if (products[i].price > heightPriceProduct.price) {
        heightPriceProduct = products[i];
      }
    }
    return heightPriceProduct;
  }
  return null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day) {
  if (day === Day.Saturday || day === Day.Sunday) {
    return `Weekend`;
  }
  return `Weekday`;
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject(new Error("Negative number not allowed"));
    }
  });
}
