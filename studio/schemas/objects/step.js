// The schema for the Loot object type
export default {
    title: 'Step',
    name: 'step',
    type: 'object',
    fields: [
      {
          name: 'step',
          title: 'Step',
          type: 'text',
          rows: 4
      },
      {
          name: 'waypoint',
          title: 'POI',
          type: 'reference',
          to: [{type:'waypoint'}]
      }

    ]
  }
