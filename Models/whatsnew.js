import Realm from "realm";

export const whatsnewSchema = {
  name: 'whatsnew',
  properties: {
    _id: 'objectId',
    header: 'string?',
    partition: 'string?',
    points: 'string[]',
  },
  primaryKey: '_id',
};
