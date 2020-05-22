// The schema for the Loot object type
export default {
    title: 'Address',
    name: 'address',
    type: 'object',
    fields: [
      {
        title: 'Name/No',
        name: 'name',
        type: 'string'
  
        // Here the user will be prompted to write any string to describe the resource type.
        // There is a way to limit this to a number of preset strings and provide a pull-down
        // or radio buttons to select resource. This is left as an exercise for the reader! See
        // the reference docs!
  
      },
      {
        title: 'Address 1',
        name: 'address1',
        type: 'string'
      },
      {
        title: 'Address 2',
        name: 'address2',
        type: 'string'
      },
      {
        title: 'Town',
        name: 'town',
        type: 'string'
      },
      {
        title: 'County',
        name: 'county',
        type: 'string'
      },
      {
        title: 'Postcode',
        name: 'postcode',
        type: 'string'
      },

    ]
  }
