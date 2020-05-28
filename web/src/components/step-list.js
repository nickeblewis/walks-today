import React from 'react'
import { Link } from "gatsby";
import {buildImageObj,getPlaceUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './author-list.module.css'

function StepList ({steps}) {
  return (
    <div className={styles.root}>
      {/* <h2 className={styles.headline}>{title}</h2> */}
      <ul className={styles.list}>
        {steps.map(({step, waypoint, _key}) => {
          // const authorName = author && author.name
          return (
            <li key={_key} className={styles.listItem}>
              <div>
                <div className={styles.avatar}>
                  {waypoint && waypoint.mainImage && waypoint.mainImage.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(waypoint.mainImage))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=''
                    />
                  )}
                  {_key}
                </div>
              </div>
              <div>
                {/* <div>{authorName || <em>Missing name</em>}</div> */}
                <div>{step}</div>
                {waypoint &&
                <Link
  to={getPlaceUrl(waypoint.location.slug.current, waypoint.slug.current)}>{waypoint.name}</Link>}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StepList
