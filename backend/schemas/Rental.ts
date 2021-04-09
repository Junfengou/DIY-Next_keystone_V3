import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const Rental = list({
    fields: {
        paymentAmount: integer({isRequired: true}),
        rental: relationship({ref: "StorageUnit"}),
        day: text({isRequired: true}),
        month: text({isRequired: true}),
        year: text({isRequired: true}),
        user: relationship({ref: "User.rental"}),
    }
})


