import { mount, VueWrapper } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import { plugins } from '../../infrastructure/plugins/allPlugins'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
	let wrapper: VueWrapper

	beforeEach(() => {
		wrapper = mount(HelloWorld, {
			props: { msg: 'Hello Vitest' },
			global: {
				plugins: [...plugins],
			},
		})
	})

	it('renders properly', () => {
		expect(wrapper.text()).toContain('Hello Vitest')
	})

  it('has expected html structure', (): void => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
