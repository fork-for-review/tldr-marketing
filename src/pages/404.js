import React from 'react'

import Layout from '../components/Layout'
import { ContentLayout } from '../styles/layouts'

const NotFoundPage = () => (
  <Layout>
    <ContentLayout style={{ gridArea: 'InnerLayoutContent' }}>
      <div style={{ gridArea: 'ContentLayoutContent' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </ContentLayout>
  </Layout>
)

export default NotFoundPage