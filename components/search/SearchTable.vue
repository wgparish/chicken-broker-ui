<template>
  <Card>
    <CardContent class="p-0">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
          <tr class="border-b bg-gray-50">
            <th v-for="header in tableHeaders"
                :key="header"
                class="p-4 text-left font-medium cursor-pointer hover:bg-gray-100"
                @click="toggleSort(header)"
            >
              <div class="flex items-center gap-2">
                {{ header }}
                <div class="flex flex-col">
                  <Icon
                      v-if="sortColumn === header"
                      :name="sortDirection === 'asc' ? 'lucide:chevron-up' : 'lucide:chevron-down'"
                      class="w-4 h-4 text-blue-600"
                  />
                  <Icon
                      v-else
                      name="lucide:chevrons-up-down"
                      class="w-4 h-4 text-gray-300"
                  />
                </div>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="loading">
            <td :colspan="tableHeaders.length" class="text-center p-4">
              Loading...
            </td>
          </tr>
          <tr v-else-if="sortedChickens.length === 0">
            <td :colspan="tableHeaders.length" class="text-center p-4">
              No chickens found matching your criteria
            </td>
          </tr>
          <tr v-for="chicken in sortedChickens"
              :key="chicken.id"
              class="border-b hover:bg-gray-50"
          >
            <td v-for="header in tableHeaders"
                :key="header"
                class="p-4"
            >
              {{ chicken[header.toLowerCase().replace(/ /g, '')] }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
</template>

<script setup>
const props = defineProps({
  chickens: {
    type: Array,
    required: true,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

// Table headers
const tableHeaders = [
  'Breed',
  'Egg Color',
  'Production',
  'Temperament',
  'Size',
  'Climate',
  'Price'
]

// Sorting state
const sortColumn = ref('Breed') // Default sort by breed
const sortDirection = ref('asc')

// Toggle sort function
const toggleSort = (header) => {
  if (sortColumn.value === header) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = header
    sortDirection.value = 'asc'
  }
}

// Computed sorted chickens
const sortedChickens = computed(() => {
  const column = sortColumn.value.toLowerCase().replace(/ /g, '')

  return [...props.chickens].sort((a, b) => {
    let comparison = 0

    // Handle price sorting specially
    if (column === 'price') {
      const priceA = parseFloat(a[column].replace('$', ''))
      const priceB = parseFloat(b[column].replace('$', ''))
      comparison = priceA - priceB
    } else {
      comparison = a[column].localeCompare(b[column])
    }

    return sortDirection.value === 'asc' ? comparison : -comparison
  })
})
</script>