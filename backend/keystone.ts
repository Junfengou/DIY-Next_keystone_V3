import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User";
import { Employee } from "./schemas/Employee";
import { Rental } from "./schemas/Rental";
import { RentalList } from "./schemas/RentalList";
import { StorageUnit } from "./schemas/StorageUnit";
import { StorageUnitType } from "./schemas/StorageUnitType";

import 'dotenv/config';
// import { extendGraphqlSchema } from './mutations';
import { insertSeedData } from './seed-data';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['email', 'password'],
  },
});

export default withAuth(

config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // These code here will just populate the product schema with bunch of pre-recorded products by running one command
    // so you don't have to manually add in all the products for testing purposes
    async onConnect(keystone) {
      console.log('Connected to the database!');
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    },
  },
  lists: createSchema({
    // Schema items go in here
    User, Employee, Rental, RentalList, StorageUnit, StorageUnitType
  }),

//   extendGraphqlSchema,

  ui: {
    // TODO: change this for roles
    
    isAccessAllowed: ({ session }) => {
      // console.log("session: ", session);
      return !!session?.data;
    },
  },
  // TODO: Add session values here
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`
  })
}));