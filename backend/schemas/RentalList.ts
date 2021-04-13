import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const RentalList = list({
    fields: {
        rentby: relationship({ref: "Rental", ui: {labelField: "rented by"}}),
        employee: relationship({ref: "Employee"}),
    }
})


