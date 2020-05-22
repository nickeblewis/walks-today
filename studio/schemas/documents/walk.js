import icon from "react-icons/lib/md/directions-walk";

export default {
  name: "walk",
  title: "Walk",
  type: "document",
  icon,
  fieldsets: [
    { name: "about", title: "About" },
    {
      name: "whereabouts",
      title: "Getting there",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "contact",
      title: "Get in touch",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
    {
      name: "meta",
      title: "Meta",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of location",
      fieldset: "about",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "about",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "About this walk",
      type: "blockContent",
      fieldset: "about",
    },
    {
      name: "thingsToSee",
      title: "Things to see",
      type: "blockContent",
      fieldset: "about",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "A general photograph of the location",
      options: {
        hotspot: true,
      },
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "step" }],
    },
    {
      name: "POIs",
      title: "Points of Interest",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "waypoint" }],
        },
      ],
    },
    {
      name: "location",
      title: "Associated Location",
      type: "reference",
      to: [{ type: "location" }],
      description: "The location this is is associated with",
      fieldset: "whereabouts",
    },
    {
      name: "address",
      title: "Address",
      type: "address",
      fieldset: "contact",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      fieldset: "contact",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      fieldset: "contact",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      fieldset: "about",
    },
    {
      name: "timeToWalk",
      title: "Walking Time",
      type: "number",
      fieldset: "meta",
    },
    {
      name: "distanceInMiles",
      title: "Distance",
      type: "number",
      fieldset: "meta",
    },
    {
      name: "difficulty",
      title: "Walk Difficulty",
      type: "reference",
      to: [{ type: "difficulty" }],
      fieldset: "meta",
    },
    {
      name: "calorieBurn",
      title: "Estimated Calorie Burn",
      type: "number",
      fieldset: "meta",
    },
    {
      name: "ordnanceSurveyMap",
      title: "OS Map",
      type: "string",
      fieldset: "whereabouts",
    },
    {
      name: "howToGetThere",
      title: "How to get there",
      type: "text",
      rows: 3,
      fieldset: "whereabouts",
    },
    {
      name: "startingPoint",
      title: "Starting Point",
      type: "text",
      rows: 3,
      fieldset: "whereabouts",
    },
    {
      name: "publications",
      title: "Associated Publications",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "publication" }],
        },
      ],
    },
    {
      name: "refreshments",
      title: "Places to eat",
      type: "array",
      fieldset: "whereabouts",
      of: [
        {
          type: "reference",
          to: [{ type: "waypoint" }],
        },
      ],
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
