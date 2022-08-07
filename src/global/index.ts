import { App } from 'vue'
import registerElement from './register-elemenet'

export default function globalRegister(app: App): void {
  registerElement(app)
}
