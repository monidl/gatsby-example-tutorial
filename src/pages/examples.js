import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person
  return (
    <Layout>
      examples page
      <HeaderHook />
      <HeaderStatic />
      <div>this is our person</div>
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
    </Layout>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        person: data {
          name
          age
        }
      }
    }
  }
`

export default examples
