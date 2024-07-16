import { Button } from "@/components/form-elements/input/button";
import { Header } from "@/components/layout/header";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col m-auto gap-14 pt-6 max-w-[689px] md:gap-10 md:pt-14 md:px-6">
        <Header>
          <Button asChild styleAs="link" className="flex items-center gap-4">
            <Link href="/feedbacks">
                <ChevronLeftIcon className="text-4661E6"/>
                Go Back
            </Link>
          </Button>
        </Header>
        <main className="px-6 md:p-0">
          {children}
        </main>
    </div>
  );
}

//w-full flex flex-col md:m-auto md:gap-10 md:pt-14 md:px-10 lg:flex-row lg:gap-6 lg:pt-24
