import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
  getCats(): Cat[] {
    return [
      {
        name: 'Leo',
        age: 19,
        id: 1,
      },
      {
        name: 'Iris',
        age: 12,
        id: 2,
      },
    ];
  }

  getCatById(id: number | string): Cat {
    const search = typeof id === 'string' ? parseInt(id) : id;

    const data = [
      {
        name: 'Leo',
        age: 19,
        id: 1,
      },
      {
        name: 'Iris',
        age: 12,
        id: 1,
      },
    ];
    const result = data.find((x) => x.id === search);

    return result;
  }

  createCat(data) {
    return data;
  }
}
