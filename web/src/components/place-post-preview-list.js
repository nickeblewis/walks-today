import {Link} from 'gatsby'
import React from 'react'
import PlacePostPreview from './place-post-preview'

import styles from './place-post-preview-list.module.css'

function PlacePostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.name && <h2 className={styles.headline}>{props.name}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <PlacePostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

PlacePostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default PlacePostPreviewGrid
