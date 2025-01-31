// composables/useChickenData.ts
export const useChickenData = () => {
    // Sample data
    const defaultChickens = [
        {
            id: 1,
            breed: 'Plymouth Rock',
            eggcolor: 'Brown',
            production: 'High (300+ eggs/year)',
            temperament: 'Docile',
            size: 'Standard',
            climate: 'Cold Hardy',
            price: '$25'
        },
        {
            id: 2,
            breed: 'Silkie',
            eggcolor: 'Cream',
            production: 'Low (<200 eggs/year)',
            temperament: 'Friendly',
            size: 'Bantam',
            climate: 'All Weather',
            price: '$35'
        },
        {
            id: 3,
            breed: 'Australorp',
            eggcolor: 'Brown',
            production: 'High (300+ eggs/year)',
            temperament: 'Friendly',
            size: 'Standard',
            climate: 'Heat Tolerant',
            price: '$28'
        },
        {
            id: 4,
            breed: 'Ameraucana',
            eggcolor: 'Blue',
            production: 'Medium (200-300 eggs/year)',
            temperament: 'Active',
            size: 'Standard',
            climate: 'Cold Hardy',
            price: '$30'
        },
        {
            id: 5,
            breed: 'Wyandotte',
            eggcolor: 'Brown',
            production: 'High (300+ eggs/year)',
            temperament: 'Docile',
            size: 'Standard',
            climate: 'Cold Hardy',
            price: '$27'
        }
    ]

    const fetchChickenData = async (filters = {}) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))

        // If no filters, return all data
        if (Object.keys(filters).length === 0) {
            return defaultChickens
        }

        // Filter the data based on selected filters
        return defaultChickens.filter(chicken => {
            return Object.entries(filters).every(([key, value]) => {
                return !value || chicken[key.toLowerCase()] === value
            })
        })
    }

    return {
        fetchChickenData
    }
}