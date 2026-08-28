export const menus = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Profile',
        to: '/Profile',
        childern: [
            {
                label: 'Details',
                to: '/Details',
                childern: [
                    {
                        label: 'Location',
                        to: '/Location',
                    }
                ]
            }
        ]
    },

    {
        label: 'WWII-Weapons',
        to: '/WWII-Weapons',
        childern: [
            {
                label: 'SMGs',
                to: '/SMGs',
                childern: [
                    {
                        label: 'MP41(r)',
                        to: '/MP41(r)',
                    }
                ]
            }
        ]
    }
]