import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship} from "@keystone-next/fields";


export const Rental = list({
    ui: {
        labelField: "name"
    },
    fields: {
        paymentAmount: integer(),
        rental: relationship({ ref: "StorageUnitType", many: true}), // Treat this file like a cartItem
        day: text(),
        month: text(),
        year: text(),
        name: text(),
        user: relationship({ref: "User.rental"}),
    }
})


