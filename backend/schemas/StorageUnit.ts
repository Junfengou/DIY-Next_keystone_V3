import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const StorageUnit = list({
  ui: {
    labelField: "unitNum"
},
    fields: {
        price: integer({isRequired: true}),
        description: text({isRequired: true}),
        availability: select({
            options: [
              { label: 'AVAILABLE', value: 'AVAILABLE' },
              { label: 'UNAVAILABLE', value: 'UNAVAILABLE' },
            ],
            defaultValue: 'AVAILABLE',
          }),
          unitNum: integer({isRequired: true}),
          unit: relationship({ref: "StorageUnitType.unitType"}),
    }
})


