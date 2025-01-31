<template>
  <footer class="bg-gray-50 border-t mt-12">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Column -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <Icon name="lucide:feather" class="w-6 h-6 text-amber-600" />
            <span class="text-lg font-semibold">Barefoot Meadows Farm</span>
          </div>
          <p class="text-gray-600">
            We are a small family farm & homestead located in the foothills of the East Tennessee mountains.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/breeds" class="text-gray-600 hover:text-amber-600">Chicken Breeds</NuxtLink></li>
            <li><NuxtLink to="/hatchery" class="text-gray-600 hover:text-amber-600">Hatchery Info</NuxtLink></li>
            <li><NuxtLink to="/faq" class="text-gray-600 hover:text-amber-600">FAQs</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-gray-600 hover:text-amber-600">Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="font-semibold mb-4">Support</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/shipping" class="text-gray-600 hover:text-amber-600">Shipping Info</NuxtLink></li>
            <li><NuxtLink to="/care-guides" class="text-gray-600 hover:text-amber-600">Care Guides</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-600 hover:text-amber-600">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-gray-600 hover:text-amber-600">Terms & Conditions</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center space-x-2">
              <Icon name="lucide:map-pin" class="w-4 h-4" />
              <span>Barefoot Meadows Farm<br/>Address, State ZIP</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="lucide:phone" class="w-4 h-4" />
              <span>(555) 123-4567</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="lucide:mail" class="w-4 h-4" />
              <span>info@barefootmeadows.farm</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t mt-12 pt-8 text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} Barefoot Meadows Farm. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>