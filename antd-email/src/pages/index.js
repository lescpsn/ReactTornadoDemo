import React, {PureComponent} from 'react'
import Redirect from 'umi/redirect'

class Index extends PureComponent {
    render () {
        console.log("**************t101:")
        return <Redirect to={'/helloworld'} />
    }
}

export default Index