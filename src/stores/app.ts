import type { FunctionalComponent } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Menus {
  name: string
  path: string
  icon: FunctionalComponent | string
  id: string
  children?: Menus[]
}

export const useAppConfigStore = defineStore('appConfig', () => {
  const isCollapse = ref(false)
  const menus = reactive<Menus[]>([
    { name: '首页', path: '/dashboard', icon: 'i-ep-house', id: '1' },
    {
      name: '用户管理',
      path: '/userList',
      icon: 'i-ep-user',
      id: '2',
      children: [
        {
          name: '用户列表',
          path: '/userList',
          icon: '',
          id: '3',
        },
      ],
    },
  ])
  const toggleCollapse = () => (isCollapse.value = !isCollapse.value)
  return {
    isCollapse,
    menus,
    toggleCollapse,
  }
})
