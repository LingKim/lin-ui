import { type App } from 'vue'
import Button from './src/button'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button

export * from './src/button-type'