import { list } from "@keystone-next/keystone/schema";
import { text, password, integer, select, relationship } from "@keystone-next/fields";


export const Employee = list({
    fields: {
        employeee: relationship({ref: "User"}),
        title: text({isRequired: true}),
        payStatus: select({
            options: [
              { label: 'SALARY', value: 'SALARY' },
              { label: 'HOURLY', value: 'HOURLY' },
            ],
            defaultValue: 'HOURLY',
          }),
    }
})


