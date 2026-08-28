import { Tabs } from "./Tabs"

export function TabsData(){

    const tabs = [
        {
            label: 'Tab-1',
            content: 'German Third Reich'
            
        },
        {
            label: 'Tab-2',
            content: 'Z-Movie-Goku'
            
        },
        {
            label: 'Tab-3',
            content: 'Black-Suit-Superman'
            
        },
    ];



    return (
        <Tabs tabs={tabs} />
    )
}