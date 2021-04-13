import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const StorageUnitType = list({
    ui: {
        labelField: "storageUnitType"
    },
    fields: {
        storageUnitType: text({isRequired: true}),
        // unitNum: integer({isRequired: true}),
        unitType: relationship({ref: "StorageUnit.unit"}),
    }
})


