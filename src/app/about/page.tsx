import { ContentPage } from "@/components/ContentPage";
import { pages } from "@/lib/pages";
export const metadata={title:pages["about"].title,description:pages["about"].intro[0]};
export default function Page(){return <ContentPage path="about"/>;}
