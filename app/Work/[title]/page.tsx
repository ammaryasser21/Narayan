import SpacificWork from "@/Components/SpacificWork";

export default function Page({ params }: Readonly<{ params: { title: string } }>)  { 

    return <SpacificWork title={params.title} />;
}
