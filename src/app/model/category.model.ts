export interface MenuCategory {
  _id: string;
  name: string;
  nameEN: string;
}

export interface CategoryInterface {
  _id: string;
  name: string;
  nameEN?: string;
  description?: string;
  descriptionEN?: string;
  parentId?: string|null;
}