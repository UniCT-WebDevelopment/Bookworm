import type { ReactElement } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>login</p>
}

const getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
};

Page.getLayout = getLayout;

export default Page