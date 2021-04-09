import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const RentalList = list({
    fields: {
        rental: relationship({ref: "Rental"}),
        employee: relationship({ref: "Employee"}),
    }
})


