import type { App } from 'vue'

import Button from '@/components/button'
import Collapse, { CollapseItem } from './components/collapse'

const components = [Button, Collapse, CollapseItem]

const install = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export { install,Button, Collapse, CollapseItem }

export default install