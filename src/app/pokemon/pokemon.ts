export interface Pokemon {

types: {
    type: {
    name: string   // types
    };
}[];
  
stats: {
    base_stat: number; //base stat
    stat: {
        name: string
      }
  }[];
  
    name: string; //info dos pokemon
    height: number;
    weight: number;
    id: number;
  }