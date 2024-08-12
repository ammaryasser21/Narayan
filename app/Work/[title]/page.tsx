import RootLayout from "@/Components/layouts/rootLayout";
import SpacificWork from "@/Components/SpacificWork";

export default function Page({ params }: Readonly<{ params: { title: string } }>)  { 

    return <RootLayout><SpacificWork title={params.title} /></RootLayout>;
}
