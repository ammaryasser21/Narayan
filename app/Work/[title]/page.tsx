import SpacificWork from "@/Components/SpacificWork";

export default function Page({ params }: Readonly<{ params: { title: string } }>)  { 
    console.log(params.title);

    return <SpacificWork title={params.title} />;
}
