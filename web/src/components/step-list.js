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
            <div key={_key}>
              <div>
                {/* <div className={styles.avatar}> */}
                {waypoint &&
                <Link
                to={getPlaceUrl(waypoint.location.slug.current, waypoint.slug.current)}><h2>{waypoint.name}</h2></Link>}
                  {waypoint && waypoint.mainImage && waypoint.mainImage.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(waypoint.mainImage))
                        .width(800)
                        .url()}
                      alt=''
                    />
                  )}
                  {_key}
                {/* </div> */}
              </div>
              <div>
                {/* <div>{authorName || <em>Missing name</em>}</div> */}
                
                <div><p>{step}</p></div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default StepList
