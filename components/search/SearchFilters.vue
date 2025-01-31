// components/search/SearchFilters.vue
<template>
  <div class="space-y-6">
    <!-- Basic Filters -->
    <Card>
      <CardHeader>
        <CardTitle class="flex items-center gap-2">
          <Icon name="lucide:filter" class="w-5 h-5" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div v-for="(options, category) in basicFilters"
             :key="category"
             class="space-y-2"
        >
          <label class="font-medium capitalize">
            {{ formatLabel(category) }}
          </label>
          <select
              :value="filters[category]"
              @change="updateFilter(category, $event.target.value)"
              class="w-full p-2 border rounded"
          >
            <option value="">Any {{ category }}</option>
            <option v-for="option in options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
      </CardContent>
    </Card>

    <!-- Advanced Filters Toggle -->
    <button
        @click="$emit('update:show-advanced', !showAdvanced)"
        class="flex items-center gap-2 text-blue-600 font-medium"
    >
      <Icon name="lucide:sliders-horizontal" class="w-4 h-4" />
      {{ showAdvanced ? 'Hide' : 'Show' }} Advanced Filters
    </button>

    <!-- Advanced Filters -->
    <Card v-if="showAdvanced">
      <CardContent class="space-y-4 pt-4">
        <div v-for="(options, category) in advancedFilters"
             :key="category"
             class="space-y-2"
        >
          <label class="font-medium capitalize">
            {{ formatLabel(category) }}
          </label>
          <select
              :value="filters[category]"
              @change="updateFilter(category, $event.target.value)"
              class="w-full p-2 border rounded"
          >
            <option value="">Any {{ category }}</option>
            <option v-for="option in options" :key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
const props = defineProps({
  filters: {
    type: Object,
    required: true
  },
  showAdvanced: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:filters', 'update:show-advanced'])

const basicFilters = {
  eggColor: ['White', 'Brown', 'Blue', 'Green', 'Cream'],
  eggProduction: ['High (300+ eggs/year)', 'Medium (200-300 eggs/year)', 'Low (<200 eggs/year)'],
  temperament: ['Docile', 'Friendly', 'Active', 'Flighty']
}

const advancedFilters = {
  size: ['Standard', 'Bantam'],
  climate: ['Cold Hardy', 'Heat Tolerant', 'All Weather'],
  maturityRate: ['Fast (16-20 weeks)', 'Medium (20-24 weeks)', 'Slow (24+ weeks)'],
  broodiness: ['Rarely Broody', 'Moderately Broody', 'Very Broody'],
  breedType: ['Show Quality', 'Heritage Breed', 'Rare Breed', 'Common']
}

const formatLabel = (str) => str.replace(/([A-Z])/g, ' $1').trim()

const updateFilter = (category, value) => {
  emit('update:filters', {
    ...props.filters,
    [category]: value
  })
}
</script>