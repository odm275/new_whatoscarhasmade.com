/** @jsx jsx */
import * as React from 'react'
import { graphql } from 'gatsby'
import { jsx, Heading } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import ItemTags from '@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags'
import Seo from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo'
import PostFooter from '@lekoarts/gatsby-theme-minimal-blog/src/components/post-footer'

type PostProps = {
    data: {
        post: {
            slug: string
            title: string
            date: string
            tags?: {
                name: string
                slug: string
            }[]
            description?: string
            canonicalUrl?: string
            body: string
            excerpt: string
            timeToRead?: number
            banner?: {
                childImageSharp: {
                    resize: {
                        src: string
                    }
                }
            }
        }
    }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

export default function ProjectPost({ data }) {
    const { title, description, date, banner, canonicalUrl, tags } =
        data.mdx.frontmatter
    const { body, excerpt, slug, timeToRead } = data.mdx
    console.log('slug', slug)
    const post = {
        title,
        description,
        date,
        banner,
        canonicalUrl,
        tags,
        body,
        excerpt,
        slug,
        timeToRead,
    }
    return (
        <Layout>
            <Seo
                title={title}
                description={description ? description : excerpt}
                image={
                    banner ? banner?.childImageSharp?.resize?.src : undefined
                }
                pathname={slug}
                canonicalUrl={canonicalUrl}
            />
            <Heading as="h1" variant="styles.h1">
                {title}
            </Heading>
            <p
                sx={{
                    color: `secondary`,
                    mt: 3,
                    a: { color: `secondary` },
                    fontSize: [1, 1, 2],
                }}
            >
                <time>{date}</time>
                {tags && (
                    <React.Fragment>
                        {` — `}
                        <ItemTags tags={tags} />
                    </React.Fragment>
                )}
                {timeToRead && ` — `}
                {timeToRead && <span>{timeToRead} min read</span>}
            </p>
            <section
                sx={{
                    my: 5,
                    '.gatsby-resp-image-wrapper': {
                        my: [4, 4, 5],
                        boxShadow: shadow.join(`, `),
                    },
                    variant: `layout.content`,
                }}
            >
                <MDXRenderer>{body}</MDXRenderer>
            </section>
            <PostFooter post={post} />
        </Layout>
    )
}

export const query = graphql`
    query projectQuery($slug: String) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                title
                description
                date
                canonicalUrl
                tags
                banner {
                    childImageSharp {
                        resize {
                            src
                        }
                    }
                }
            }
            body
            slug
            excerpt
            timeToRead
        }
    }
`
