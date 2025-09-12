interface IRecipe {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  description: string;
  ingredients: {
    id: number;
    name: string;
    quantity: number | string;
    unit: string;
  }[];
  instructions: string[];

}

export default IRecipe;