export type NavConfig = {
    title: string;
    menuItems: MenuItem[]
};

export type MenuItem = {
    refUrl: string;
    label: string;
    imageUrl?: string;
}

export const NavigationConfig: NavConfig = {
    title: "Dray's MP Tweaks",
    menuItems: [
        {label: 'Policies', refUrl:"#"},
        {label: 'National Ideas', refUrl:"#"},
        {label: 'Mechanical Changes', refUrl: "#"}
    ]
}


export const RecentlyUpdated: MenuItem[] = [
  {label: 'Bohemia', refUrl: "#"},
  {label: 'Idea Groups', refUrl:'#', imageUrl: '/icons/artillery_icon.png'},
  {label: 'Policies', refUrl: '#'}
]