import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LinButton from '../src/button';

test('displays message', () => {
    const wrapper = mount(LinButton, {
        props: {
            type: 'primary'
        },
        slots: {
            default: 'Hello world'
        }
    })

    console.log("wrapper.html()", wrapper.html())
    expect(wrapper.text()).toContain('Hello world')
})
