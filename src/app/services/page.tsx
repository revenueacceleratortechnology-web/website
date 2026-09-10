import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/pages";
export const metadata={title:pages["services"].title,description:pages["services"].intro[0]};
export default function Page(){return <ContentPage path="services"/>;}
