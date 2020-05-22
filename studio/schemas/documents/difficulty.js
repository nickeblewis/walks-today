import icon from 'react-icons/lib/md/directions-walk'

export default {
  name: 'difficulty',
  title: 'Difficulty Levels',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of location'
    },
  ]
}
