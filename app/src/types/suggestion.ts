export interface Suggestion { 
    id: string;
    category: 'action' | 'monitoring' | 'consideration' | 'alert';
    title: string;
    description: string;
}