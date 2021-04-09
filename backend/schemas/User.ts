import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const User = list({
    fields: {
        username: text({isRequired: true}),
        email: text({isRequired: true, isUnique: true}),
        password: password(),
        name: text({isRequired: true}),
        address: text({isRequired: true}),
        city: text({isRequired: true}),
        state: text({isRequired: true}),
        zipcode: integer({isRequired: true}),
        country: text({isRequired: true}),
        phone: text({isRequired: true}),
        drlic: text({isRequired: true}),
        additionalInfo: text(), 
        rental: relationship({ref:"Rental.user"})
    }
})


