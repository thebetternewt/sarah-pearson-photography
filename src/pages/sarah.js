import React from 'react'
import { Link } from 'gatsby'

import Button from '../ui/elements/Button'
import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import { Section, Container } from '../ui/layout'

// import pearsonFamily from '../images/pearson-family.jpg'
import { auto } from 'eol'
import { italic } from 'ansi-colors'
import { script, display } from '../ui/fonts'

const Sarah = () => (
  <Layout>
    <PageHeader>
      <img
        src="https://images.pexels.com/photos/1449657/pexels-photo-1449657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        style={{ width: '100%', transform: 'translate3d(0, -35%, 0)' }}
      />
    </PageHeader>
    <Section>
      <Container>
        <p>It's so nice to meet you!</p>
        <h1>Sarah & the Team</h1>
        <p>Hello, my name is Sarah!</p>
        <p>
          I was born and raised in Nashville, TN, but I now call Mississippi my
          home. My hubby and I both speak Spanish, and love doing pretty much
          everything together--music, home remodeling projects, coffee dates,
          grocery shopping, etc. Of course, we love " 'Merica", but we also love
          Nicaragua and are so grateful for our friends (turned into family) in
          that beautiful country! We have one daughter--Sofia--and are expecting
          our son who is due in December 2017! We continue to pray that the Lord
          would give us more beautiful babies with which to fill our quiver. I
          don't have a favorite color, because how could I ever pick just one?!
          I love drinking hot tea or coffee and enjoying friends' company at the
          dinner table. My husband says that I make the best chocolate chip
          cookies in the world, and I say they're good enough to put my GF diet
          on hold...okay and maybe add wedding cake and blueberry cake donuts to
          that list, so maybe I'm not really Gluten Free after all...? (wink
          wink) I always wanted to be a writer, and in a way that I never
          expected, my dream came true. As a photographer, it is my honor and my
          privilege to tell some of life's sweetest love stories. While I still
          count count the days until every wedding (cake) day and love oohing
          and ahhing over a newborn baby, this is what I love most about my job:
          telling your story. Whether you are getting ready to go off to
          college, getting married, expecting a baby, or watching your family
          grow, it would be my privilege to walk with you through that chapter
          of your life and capture those moments for you.
        </p>
        <p>
          To visit my personal lifestyle blog, visit:{' '}
          <a href="www.perennialpraise.com" target="_blank">
            www.perennialpraise.com
          </a>
          .
        </p>
        <Link to="/contact">
          <Button className="color">Get in touch</Button>
        </Link>
        <blockquote
          style={{
            // fontFamily: display,
            fontStyle: 'italic',
            opacity: 0.6,
            margin: '1rem 0',
            fontSize: '1.8em',
            // fontWeight: 600,
          }}
        >
          Photography is just as much about preserving a moment as it is about
          telling a story.
        </blockquote>
        <h2>The Team:</h2>
        <p>
          Nick: Nick is the muscle behind the mission as well as our favorite
          videographer! Yes, that's right! Thanks to Nick,…
        </p>
        <p>
          Sofia: Let's be honest... Sofia is the main star of this show! She
          encourages all of us with lots of hugs, kisses, and…
        </p>
        <p>Samuel: …</p>
        <div>
          As a team, this is what we value most: Your story. It’s that look when
          the groom sees his bride for the very first time. (image) It’s just
          how little baby toes are and yet how big they’ll be one day. (image)
          It’s a growing family that wants to remember the moment. (image) It’s
          the love story of two looking forward to becoming one, (image) and
          it’s the way the sun shines just right on a wedding day. (image) If
          it’s true that a picture is worth a thousand words, I’m so thankful to
          do more storytelling as a photographer than I ever could otherwise.
          Would you let us tell your story? (image)
        </div>
      </Container>
    </Section>
  </Layout>
)

export default Sarah
