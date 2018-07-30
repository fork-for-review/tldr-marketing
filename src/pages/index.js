import React, { Fragment } from 'react'
import styled from 'react-emotion'
import theme from '../styles/theme'
import Link, { withPrefix } from 'gatsby-link'
import Toggle from 'react-toggled'
import parseURL from 'url-parse'
import ReactMarkdown from 'react-markdown'
import TextTruncate from 'react-text-truncate'
import WideLink from '../components/WideLink'
import WideButton from '../components/WideButton'
import ZoomImg from '../components/ZoomImg'

import avatar from '../assets/saijo-george.png'

const { rem } = theme.tools

const categories = {
  seo: {
    color: '#E0697D',
    label: 'SEO',
  },
  'paid-media': {
    color: '#4E8ED9',
    label: 'Paid Media',
  },
  'social-media': {
    color: '#4FB996',
    label: 'Social Media',
  },
  general: {
    color: '#39C2C2',
    label: 'General',
  },
  jobs: {
    color: '#F4A93A',
    label: 'Jobs',
  },
  'tips-and-tricks': {
    color: '#C583DE',
    label: 'Tips & Tricks',
  },
  interview: {
    color: '#DE83B4',
    label: 'Interview',
  },
}

const links = [
  {
    title: 'Not Secure Label Is Now Live For HTTP Sites On Chrome',
    url:
      'https://blog.chromium.org/2018/05/evolving-chromes-security-indicators.html',
    img: {
      src: withPrefix('/images/p1.png'),
      alt: '',
      w: 705,
      h: 306,
    },
    description: `It looks like with the latest version of Chrome (just go in and manually update if it did not auto update for you) HTTP sites are now marked with the Not Secure label along with the 🛈 mark in the address bar.`,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title:
      'Mark Up Sections Of A News Article To Be Read Aloud By The Google Assistant',
    url:
      'https://webmasters.googleblog.com/2018/07/hey-google-whats-latest-news.html',
    img: {
      src: withPrefix('/images/p2.png'),
      w: 640,
      h: 352,
    },
    alt: '',
    description: `Google has announced a new schema.org structured data specification (still pending) called [speakable](https://pending.schema.org/speakable) for **[eligible publishers](https://developers.google.com/search/docs/data-types/speakable#eligibility)** to mark up sections of a news article that are most relevant to be read aloud by the Google Assistant.The speakable property works on Google Home devices for English-speaking users in the U.S. only.Links : [Technical Details](https://developers.google.com/search/docs/data-types/speakable) & [Submit your Interest](https://services.google.com/fb/forms/speakablenewsinterest/) if you are a Google News Publisher. `,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'Google Tests New Design For Image Search Results',
    url:
      'https://www.searchenginejournal.com/google-tests-new-design-for-image-search-results/262641/',
    img: {
      src: withPrefix('/images/p3.png'),
      w: 1000,
      h: 380,
    },
    alt: '',
    description: `
Google has been spotted testing a new design for image search results pages. The redesign includes an in-line photo viewer, which opens on the left-hand side of the SERPs. There are captions and URLs in the new layout.
It does not show up for me, so this could be a limited test or a gradual rollout. `,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'Google Tests Price Insights For Hotel Listings',
    url: 'https://alakov.com/blog/price-insights-test',
    img: {
      src: withPrefix('/images/p4.png'),
      w: 827,
      h: 657,
    },
    alt: '',
    description: `Google is testing a new feature in hotels’ listings called **Price Insights**. In this test, a box appears in the hotel’s knowledge panel that informs users of how prices at the hotel compare against similar hotels in the area followed by “Explore Insights” CTA.

  There are some very aggressive messages in there like:
  * The hotel costs more than similar hotels nearby.
  * Prices comparable at similar hotel nearby.


  And some favourable ones like:
  * The hotel is 20% less than usual.


  I image the last few weeks would have been quite stressful if you are an SEO working in the Hotel Industry with all these new changes.`,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: "GMB Dashboard Starts Showing Competitor's Google Posts",
    url: 'https://twitter.com/brodieseo/status/1021545487558537218',
    img: {
      src: withPrefix('/images/p5.jpg'),
      w: 468,
      h: 347,
    },
    alt: '',
    description: `
Looks like Google really wants you to add more things through Google Posts and the latest tactic is to show you what you competitors are posting. You can add those in through your [GMB Dashboard](https://business.google.com/locations).`,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'Alphabet Q2 Reported At 32.7 Billion Up 26% YoY',
    url: 'https://www.cnbc.com/2018/07/23/alphabet-earnings-q2-2018.html',
    img: {
      src: withPrefix('/images/p6.png'),
      w: 567,
      h: 207,
    },
    alt: '',
    description: `
Despite the fine imposed by the EU, things are looking good for Google. The Q2 2018 report was able to come back looking so good namely thanks to Google’s ad revenues which had gone from $22.6bn in Q2 2017 to $28bn in Q2 2018.

[Report PDF](https://abc.xyz/investor/pdf/2018Q2_alphabet_earnings_release.pdf)`,
    category: 'general',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'Pinterest Nears 1 Billion In Ad Sales',
    url:
      'http://www.thesempost.com/google-search-quality-rater-guidelines-updated/',
    img: '',
    description: `
After hitting $500 million in sales in 2017, Pinterest is on pace to almost double that this year by anonymous sources.
Pinterest is having particular success with mobile ads, as the site becomes a more popular place for big fashion and beauty brands to get in front of the company's 200 million monthly active users.
Reaching $1 billion in revenue will mark a significant milestone, but it's way below previous estimates. In 2015, [TechCrunch](https://techcrunch.com/2015/10/16/leaked-pinterest-documents-show-revenue-growth-forecasts/) reported on leaked financial documents that showed Pinterest was then projecting sales of $2.8 billion by 2018. It's a tall task to break up the digital advertising duopoly of Google and Facebook, which control a combined 57 percent of U.S. digital ad spending, according to [eMarketer](https://www.emarketer.com/content/google-and-facebook-s-digital-dominance-fading-as-rivals-share-grows). `,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title:
      'Google Seems To Have Hijacked The Search Box For TheFreeDictionary.com',
    url:
      'https://www.seroundtable.com/google-dictionary-branded-free-dictionary-26091.html',
    img: {
      src: withPrefix('/images/p8.png'),
      w: 654,
      h: 365,
    },
    alt: '',
    description: `
When you use The Free Dictionary site search box in the SERP for something that takes you within Google's dictionary over their internal site search.
They also show Google's dictionary widget at  position zero for the query [free dictionary](https://www.google.com.au/search?q=free+dictionary), [dictionary](https://www.google.com.au/search?q=free+dictionary), etc`,
    category: 'seo',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'IAB Survey Finds Podcast Ad Revenue Is Growing Fast',
    url: 'https://www.searchenginejournal.com/podcast-ad-revenues/262655/',
    img: {
      src: withPrefix('/images/p9.png'),
      w: 696,
      h: 334,
    },
    alt: '',
    description: `
A new report indicates that podcasting revenues are a fast growing areas of digital advertising. The Internet Advertising Bureau (IAB) released a [research study -PDF](https://www.iab.com/wp-content/uploads/2018/06/2018_IAB_Podcast_Ad_Rev_Study_vFinal.pdf) showing that podcasting is experience accelerated growth and is forecast to keep on rising.`,
    category: 'paid-media',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title:
      'YouTube Tests An Explore Tab To Help Users Discover Videos Based On Viewing Activity',
    url:
      'https://www.searchenginejournal.com/youtubes-new-explore-tab-helps-users-discover-videos-based-on-viewing-activity/262823/',
    img: {
      src: withPrefix('/images/p10.jpg'),
      w: 760,
      h: 400,
    },
    alt: '',
    description: `
YouTube is testing a new tab in the iPhone app that is designed to help users find videos they may not have discovered on their own. The aim of the Explore tab will be to help expose YouTube viewers to new creators.
Those who have been selected for the test group will notice that the Explore tab exists in place of the Trending tab.`,
    category: 'social-media',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'Amazon Sponsored Products Could Be Coming To A Website Near You',
    url:
      'http://adage.com/article/digital/amazon-tests-ground-product-ads/314321/',
    img: '',
    description: `
In its latest bid to close the gap with Google and Facebook in digital ad sales, Amazon plans to dramatically increase the available space for one of its most important formats, Sponsored Products: It could let brands run them across the internet, not just within its own properties.
Amazon is talking with top agencies and brands about participating in a test that would expand the scope of product ads, delivering them to outside websites by retargeting consumers who visit Amazon.`,
    category: 'paid-media',
    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
  {
    title: 'Declines In Pay TV Subscriptions Have Exceeded Previous Estimates',
    url:
      'https://www.recode.net/2018/7/24/17604218/partnering-with-netflix-and-hulu-hasnt-stopped-pay-tv-providers-from-losing-customers',
    img: {
      src: withPrefix('/images/p12.png'),
      w: 845,
      h: 292,
    },
    alt: '',
    description:
      'The number of cord-cutters in the U.S. is expected to increase 33 percent this year to 33 million, according to eMarketer. Last year, the research firm had predicted a 22 percent rise in people who have canceled their pay TV service, but have since had to revise that estimate upward.',
    category: 'general',

    senderName: 'Saijo George',
    senderTwitter: '@SaijoGeorge',
  },
]

const CategoryLink = styled(Link)(
  {
    display: 'flex',
    alignItems: 'center',
    padding: `${rem(7)} ${rem(14)}`,
    position: 'relative',
    zIndex: 1,
    fontWeight: 800,
    fontSize: rem(14),
    borderRadius: 5,
    transition: '.2s',
    '::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1,
      left: 0,
      top: 0,
      borderRadius: 'inherit',
      transition: 'inherit',
      transform: 'scale(.9)',
      opacity: 0,
    },
    ':hover': {
      color: '#fff',
      '::before': {
        opacity: 1,
        transform: 'none',
      },
    },
  },
  ({ hoverColor }) => ({ '::before': { background: hoverColor } })
)

const Categories = props => (
  <ul
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      margin: `0 ${rem(-14)}`,
      color: theme.colors.text.blue.dark,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      background: theme.colors.bg.blue.light,
      boxShadow: `0 0 40px 30px ${theme.colors.bg.blue.light}`,
      paddingTop: rem(15),
      marginBottom: rem(15),
    }}
    {...props}
  >
    {Object.entries(categories).map(([slug, { color, label }]) => (
      <li>
        <CategoryLink hoverColor={color} to={`/category/${slug}`}>
          {label}
        </CategoryLink>
      </li>
    ))}
    <li>
      <CategoryLink
        to="/search"
        css={{ color: theme.colors.text.blue.light }}
        hoverColor={theme.colors.text.blue.light}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          css={{ marginRight: 5 }}
        >
          <circle cx="4.57143" cy="4.57143" r="3.57143" />
          <path
            d="M0 0L4.57143 4.57143"
            transform="translate(7.42847 7.42871)"
          />
        </svg>
        Search
      </CategoryLink>
    </li>
  </ul>
)

const Item = ({
  data: { title, url, img, senderName, senderTwitter, description, category },
}) => {
  const { hostname, pathname, query, hash } = parseURL(url)
  const externalURL = `${url}?utm_source=tldrmarketing.com&utm_medium=referral`
  const fullURL = hostname + pathname + query + hash

  return (
    <Toggle>
      {({ on, setOn, setOff }) => (
        <li
          className="post"
          css={{
            position: 'relative',
            padding: rem(20),
            paddingBottom: 0,
            background: '#fff',
          }}
        >
          <div
            css={{
              position: 'absolute',
              left: '100%',
              top: 0,
              paddingTop: '24%',
              transform: 'translateY(-50%)',
            }}
          >
            <div
              css={{
                padding: `${rem(16)} ${rem(4)}`,
                fontWeight: 800,
                fontSize: rem(12),
                color: '#fff',
                writingMode: 'vertical-lr',
                whiteSpace: 'nowrap',
                background: categories[category].color,
                borderRadius: '0 5px 5px 0',
              }}
            >
              {categories[category].label}
            </div>
          </div>
          <article css={{ display: 'flex', alignItems: 'center' }}>
            <div
              css={{
                flexBasis: '65%',
                padding: rem(12),
                paddingRight: rem(24),
                overflow: 'hidden',
              }}
            >
              <Toggle>
                {({
                  on: showFullURL,
                  setOn: onMouseOver,
                  setOff: onMouseLeave,
                }) => (
                  <a
                    onMouseOver={onMouseOver}
                    onMouseLeave={onMouseLeave}
                    href={externalURL}
                    target="_blank"
                    rel="noopener"
                    css={{
                      display: 'block',
                      borderRadius: 2,
                      ':hover': {
                        boxShadow: '0 0 0 5px #fff, 0 0 0 8px #add2e4',
                      },
                    }}
                  >
                    <h3
                      css={{
                        fontWeight: 800,
                        fontSize: rem(19),
                        color: '#333',
                      }}
                    >
                      {title}
                    </h3>
                    <span
                      css={{
                        display: 'block',
                        marginTop: 3,
                        fontSize: rem(14),
                        color: '#777',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                      }}
                    >
                      {showFullURL ? fullURL : hostname}
                    </span>
                  </a>
                )}
              </Toggle>
              {on ? (
                <ReactMarkdown
                  source={description}
                  css={{
                    marginTop: rem(13),
                    fontSize: rem(16),
                    lineHeight: 1.6,
                    color: '#777',
                    '> * + *': {
                      marginTop: 16,
                    },
                    li: {
                      listStyle: 'disc',
                      marginLeft: 36,
                    },
                    a: {
                      color: '#3186b1',
                      textDecoration: 'underline',
                    },
                  }}
                />
              ) : (
                <TextTruncate
                  element="p"
                  line={2}
                  truncateText="…"
                  text={description}
                  css={{
                    marginTop: rem(13),
                    fontSize: rem(16),
                    lineHeight: 1.6,
                    color: '#777',
                  }}
                />
              )}
              {on ? (
                <WideButton
                  onClick={setOff}
                  css={{
                    display: 'block',
                    width: '100%',
                    paddingTop: rem(16),
                    paddingLeft: 0,
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  Show less{' '}
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M0 0L4 4L8 0"
                      transform="translate(9 6) rotate(-180)"
                      strokeWidth="1.6"
                    />
                  </svg>
                </WideButton>
              ) : (
                <WideLink
                  to={`/links/abc123`}
                  onClick={e => {
                    e.preventDefault()
                    setOn()
                  }}
                  css={{
                    display: 'block',
                    paddingTop: rem(16),
                    paddingLeft: 0,
                  }}
                >
                  Show more{' '}
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M0 0L4 4L8 0"
                      transform="translate(1 1)"
                      strokeWidth="1.6"
                    />
                  </svg>
                </WideLink>
              )}
            </div>
            <div
              css={{
                alignSelf: 'flex-start',
                flexBasis: '35%',
                marginBottom: rem(20),
              }}
            >
              {img && <ZoomImg img={img} />}
              {on &&
                (senderName || senderTwitter) && (
                  <div
                    css={{
                      marginTop: rem(13),
                      fontSize: rem(14),
                      color: '#777',
                    }}
                  >
                    Submitted by:{' '}
                    {senderTwitter ? (
                      <a
                        href={`https://twitter.com/${senderTwitter}`}
                        target="_blank"
                        rel="noopener"
                        css={{ fontWeight: 800 }}
                      >
                        {senderName || senderTwitter}
                      </a>
                    ) : (
                      <strong css={{ fontWeight: 800 }}>{senderName}</strong>
                    )}
                  </div>
                )}
            </div>
          </article>
        </li>
      )}
    </Toggle>
  )
}

const IndexPage = () => (
  <Fragment>
    <Categories style={{ gridArea: 'Menu' }} />
    <div style={{ gridArea: 'Content' }}>
      <div
        css={{
          position: 'fixed',
          zIndex: 1,
          bottom: theme.space.rem.lg,
          background: 'rgba(239, 245, 248, 0.9)',
          boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
        }}
      >
        <img
          src={avatar}
          alt="Saijo George"
          css={{
            width: rem(42),
            height: rem(42),
            borderRadius: '50%',
            filter: 'grayscale(1)',
            transformOrigin: 'left bottom',
            transition: '.3s',
            '*:hover > &': {
              transform: 'scale(2)',
              filter: 'grayscale(0)',
            },
          }}
        />
        <h4
          css={{
            marginTop: rem(13),
            marginBottom: rem(13),
            fontWeight: 700,
            fontSize: rem(18),
            lineHeight: 1.2,
            color: theme.colors.text.blue.dark,
          }}
        >
          Created by<br />
          Saijo George
        </h4>
        <WideLink to="/about" css={{ padding: 0 }}>
          Read more
        </WideLink>
      </div>
    </div>
    <div style={{ gridArea: 'Content' }}>
      <div
        css={{
          display: 'grid',
          alignItems: 'start',
          gridTemplate: `
            "Sidebar Content"
            / 25% 75%
          `,
          marginBottom: theme.space.rem.xxl,
        }}
      >
        <div
          style={{ gridArea: 'Sidebar' }}
          css={{
            position: 'sticky',
            top: rem(150),
            color: theme.colors.text.blue.dark,
          }}
        >
          <h4 css={{ fontWeight: 600, fontSize: rem(40), lineHeight: 1.2 }}>
            thursday
            <span
              css={{ display: 'block', fontWeight: 700, fontSize: rem(18) }}
            >
              05/24
            </span>
          </h4>
        </div>
        <div style={{ gridArea: 'Content' }}>
          <ul
            css={{
              boxShadow: '0 5px 25px #CFDEE5',
              borderRadius: 8,
              '> li': {
                '&:first-child': { borderRadius: '8px 8px 0 0' },
                '&:last-child': { borderRadius: '0 0 8px 8px' },
                '&:not(:last-child)': { borderBottom: '1px solid #D6E3E9' },
              },
            }}
          >
            {links.map((data, i) => <Item key={i} data={data} />)}
          </ul>
        </div>
      </div>
      <div
        css={{
          display: 'grid',
          alignItems: 'start',
          gridTemplate: `
            "Sidebar Content"
            / 25% 75%
          `,
          marginBottom: theme.space.rem.xxl,
        }}
      >
        <div
          style={{ gridArea: 'Sidebar' }}
          css={{
            position: 'sticky',
            top: rem(150),
            color: theme.colors.text.blue.dark,
          }}
        >
          <h4 css={{ fontWeight: 600, fontSize: rem(40), lineHeight: 1.2 }}>
            friday
            <span
              css={{ display: 'block', fontWeight: 700, fontSize: rem(18) }}
            >
              05/25
            </span>
          </h4>
        </div>
        <div style={{ gridArea: 'Content' }}>
          <ul
            css={{
              boxShadow: '0 5px 25px #CFDEE5',
              borderRadius: 8,
              li: {
                '&:first-child': { borderRadius: '8px 8px 0 0' },
                '&:last-child': { borderRadius: '0 0 8px 8px' },
                '&:not(:last-child)': { borderBottom: '1px solid #D6E3E9' },
              },
            }}
          >
            {links.map((data, i) => <Item key={i} data={data} />)}
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
)

export default IndexPage