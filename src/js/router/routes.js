import App from '../components/App'
import Home from '../pages/Home'

export default [

    { path: '/', component: App, children: [
            {path: '', component: Home },
    ]}
]
