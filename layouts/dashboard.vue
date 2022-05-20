<template>
  <Container>
    <div class="flex h-screen bg-gray-200">
      <div
          :class="sidebarOpen ? 'block' : 'hidden'"
          class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
          @click="sidebarOpen = false"
      />
      <Sidebar :sidebarOpen="sidebarOpen" :setSidebar="($event)=> sidebarOpen = $event"/>
      <div class="flex-1 flex flex-col overflow-hidden">
        <Navbar :sidebarOpen="sidebarOpen" :setSidebar="($event)=> sidebarOpen = $event"/>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div class="container mx-auto px-6 py-8">
            <!--            <Breadcrumbs/>-->
            <h1
                v-if="app.page.title"
                class="order-1 text-primary-700 text-3xl font-bold tracking-tight mt-8"
            >
              {{ app.page.title }}
            </h1>
            <div class="mb-10"/>
            <slot/>
          </div>
        </main>
      </div>
    </div>
  </Container>
</template>
<script setup>
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { useApp } from '../store/app'
import { ref } from '#imports'

const sidebarOpen = ref(false)
const app = useApp()
</script>
