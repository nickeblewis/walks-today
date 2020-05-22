import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon,
} from 'react-icons/lib/go'

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
}

const places = S.listItem()
  .title('Places')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('/places')
      .items([
        S.listItem()
          .title('Published places')
          .schemaType('waypoint')
          .icon(BlogIcon)
          .child(
            S.documentList('waypoint')
              .title('Published places')
              .menuItems(S.documentTypeList('waypoint').getMenuItems())
              // Only show waypoints with publish date earlier than now and that is not drafts
              .filter('_type == "waypoint" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('waypoint')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('waypoint').title('All places').icon(AllIcon),
        S.listItem()
          .title('Places by category')
          .child(
            // List out all categories
            S.documentTypeList('category')
              .title('Places by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('waypoint')
                  .title('Places')
                  .filter(
                    '_type == "waypoint" && $catId in categories[]._ref'
                  )
                  .params({ catId })
              )
        ),
        S.listItem()
          .title('Places by location')
          .child(
            // List out all categories
            S.documentTypeList('location')
              .title('Places by location')
              .child(locId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('waypoint')
                  .title('Places')
                  .filter(
                    '_type == "waypoint" && location._ref==$locId'
                  )
                  .params({ locId })
              )
        ),
        S.divider(),
        S.documentTypeListItem('author').title('Authors').icon(AuthorIcon),
        S.documentTypeListItem('category').title('Categories'),
        S.documentTypeListItem('location').title('Locations')
      ])
  )

export default places
