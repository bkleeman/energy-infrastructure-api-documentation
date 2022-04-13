import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
      <p
        style={{
          color: 'cornflowerblue',
          fontSize: 50,
          fontWeight: 'bold',
        }}
      >
        Energy Infrastructure API
      </p>
      <h2>A public API containing data on energy infrastructure throughout the United States</h2>
      <p>
        Currently used to power the Center for Robust Decision-making on Climate and Energy Policy's {' '}
        <a href="http://us.infrastructure.rdcep.org/#">
           US Energy Infrastructure Visualization.
        </a>
      </p>
      <br />
      <Button.Group size="large">
        <Button
          size="large"
          icon={<TwitterOutlined />}
          href="https://mobile.twitter.com/rdceporg"
          target="_blank"
        >
          Twitter
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/bkleeman/energy-infrastructure-api"
          target="_blank"
        >
          Github
        </Button>

        <Button type="primary" size="large">
          <Link to="/docs/template/get-started/introduction">Get Started</Link>
        </Button>
      </Button.Group>
    </div>
  )
}

export default IndexPage
