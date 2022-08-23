import { App } from 'vue'
import registerElement from './register-elemenet'
import registerProperties from './register-properties'

export default function globalRegister(app: App): void {
  registerElement(app)
  registerProperties(app)
}
