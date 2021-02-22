export interface SummaryResponse {
    type: string;
    title: string;
    displaytitle: string;
    namespace: {
        id: number;
        text: string;
    };
}
