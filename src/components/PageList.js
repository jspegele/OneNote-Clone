import React from 'react'
import PropTypes from 'prop-types'
import AddPage from './AddPage'
import PageListItem from './PageListItem'
import { getVisiblePages } from '../selectors/pages'

import styles from './style/PageList.module.scss'

const PageList = ({ pages, filters, currentSectionId, currentPageId, dispatchPages }) => {
  const visiblePages = getVisiblePages(pages, filters)
  return (
    <div className={styles.pageList}>
      {visiblePages.length ? (
        <div className={styles.pages}>
          {visiblePages.length > 0 && (
            visiblePages.map(page => (
              <PageListItem
                key={page.id}
                pageId={page.id}
                title={page.title}
                currentSectionId={currentSectionId}
                activePage={currentPageId === page.id ? true : false}
              />
            ))
          )}
        </div>
      ) : (
        <></>
      )}
      <AddPage />
    </div>
  )
}

PageList.propTypes = {
  currentSectionId: PropTypes.string,
  currentPageId: PropTypes.string,
  visiblePages: PropTypes.array
}

PageList.defaultProps = {
  currentSectionId: '',
  currentPageId: '',
  visiblePages: []
}
 
export default PageList
