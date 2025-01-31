<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <div class="max-w-7xl mx-auto">
      <!-- Search Bar -->
      <div class="mb-6 relative">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for chicken breeds..."
            class="w-full p-4 pl-12 text-lg border rounded-lg shadow-sm"
        />
        <Icon name="lucide:search" class="absolute left-4 top-4 text-gray-400" />
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Filters Sidebar -->
        <div class="md:col-span-3">
          <SearchFilters
              v-model:filters="selectedFilters"
              v-model:show-advanced="showAdvancedFilters"
          />
        </div>

        <!-- Results Table -->
        <div class="md:col-span-9">
          <SearchTable
              :chickens="chickens"
              :loading="loading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const showAdvancedFilters = ref(false)
const selectedFilters = ref({})
const chickens = ref([])
const loading = ref(false)

const { fetchChickenData } = useChickenData()

// Fetch initial data
onMounted(async () => {
  loading.value = true
  chickens.value = await fetchChickenData()
  loading.value = false
})

// Watch for filter changes
watch(selectedFilters, async (newFilters) => {
  loading.value = true
  chickens.value = await fetchChickenData(newFilters)
  loading.value = false
}, { deep: true })
</script>