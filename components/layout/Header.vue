<template>
  <header class="bg-white shadow-sm">
    <nav class="max-w-6xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <Icon name="lucide:feather" class="w-8 h-8 text-amber-600" />
          <span class="text-xl font-semibold text-gray-900">Barefoot Meadows Farm</span>
        </NuxtLink>

        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-amber-600">Search Breeds</NuxtLink>
          <NuxtLink to="/hatchery" class="text-gray-600 hover:text-amber-600">Our Hatchery</NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-amber-600">About Us</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 hover:text-amber-600">Contact</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <Icon name="lucide:menu" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
        <NuxtLink to="/" class="block py-2 text-gray-600 hover:text-amber-600">Search Breeds</NuxtLink>
        <NuxtLink to="/hatchery" class="block py-2 text-gray-600 hover:text-amber-600">Our Hatchery</NuxtLink>
        <NuxtLink to="/about" class="block py-2 text-gray-600 hover:text-amber-600">About Us</NuxtLink>
        <NuxtLink to="/contact" class="block py-2 text-gray-600 hover:text-amber-600">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>