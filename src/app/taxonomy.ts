export interface GlobalTaxonomy {
  'Level1': string;
  'Level2': string;
  'Level3': string;
  'Level4': string;
  'CODE': number;
}
export const TAXONOMY_DATA: GlobalTaxonomy[] = [
  {
    "Level1": "Food",
    "Level2": "Fruit-Vegetables",
    "Level3": "Fruit",
    "Level4": "Apples",
    "CODE": 1000
  },
  {
    "Level1": "Food",
    "Level2": "Fruit-Vegetables",
    "Level3": "Fruit",
    "Level4": "Pears",
    "CODE": 1001
  },
  {
    "Level1": "Food",
    "Level2": "Fruit-Vegetables",
    "Level3": "Vegetables",
    "Level4": "Potatos",
    "CODE": 1010
  },
  {
    "Level1": "Food",
    "Level2": "Fruit-Vegetables",
    "Level3": "Vegetables",
    "Level4": "Carrots",
    "CODE": 1011
  },
  {
    "Level1": "Food",
    "Level2": "Meats",
    "Level3": "White Meat",
    "Level4": "Chicken",
    "CODE": 1100
  },
  {
    "Level1": "Food",
    "Level2": "Meats",
    "Level3": "White Meat",
    "Level4": "Rabbit",
    "CODE": 1101
  },
  {
    "Level1": "Food",
    "Level2": "Meats",
    "Level3": "Red Meat",
    "Level4": "Beef",
    "CODE": 1110
  },
  {
    "Level1": "Food",
    "Level2": "Meats",
    "Level3": "Red Meat",
    "Level4": "Game",
    "CODE": 1111
  }
];
