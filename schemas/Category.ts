import { Realm } from "@realm/react";

class Category extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  color!: string;
  icon!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static schema: Realm.ObjectSchema = {
    name: "Category",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      color: "string",
      icon: "string",
      createdAt: "date",
      updatedAt: "date",
    },
  };
}

export default Category;
