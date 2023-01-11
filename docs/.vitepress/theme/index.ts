import Theme from 'vitepress/dist/client/theme-default'
import FlyUI from '../../../src/entry'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(FlyUI)
  },
}