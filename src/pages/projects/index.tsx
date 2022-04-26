/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import List from '@lekoarts/gatsby-theme-minimal-blog/src/components/list'

import { graphql, useStaticQuery } from 'gatsby'

type PageProps = {
    data: {
        page: {
            title: string
            slug: string
            excerpt: string
            body: string
        }
    }
    [key: string]: any
}

const Projects = () => {
    const data = useStaticQuery(graphql`
        query allProjectsQuery {
            allMdx(
                filter: {
                    fileAbsolutePath: { regex: "/content/project-posts/i" }
                }
            ) {
                nodes {
                    slug
                    frontmatter {
                        title
                    }
                }
            }
        }
    `)
    const { nodes } = data.allMdx

    const linksToProjects = nodes.map((node) => (
        <li>
            <Link to={`${node.slug}`}>{node.frontmatter.title}</Link>
        </li>
    ))

    return (
        <Layout>
            <Seo
                title="Oscar Bautista Projects"
                description={'Projects Oscar Bautista built'}
            />
            <Heading as="h1" variant="styles.h1">
                My Projects
            </Heading>
            <section sx={{ my: 5, variant: `layout.content` }}>
                <List>
                    <ul>{linksToProjects}</ul>
                </List>
            </section>
        </Layout>
    )
}
export default Projects
