"use client";

import { AppShell, Space } from "@mantine/core";
import { IPropertyData, ISearchPropertyParams, UserAuthModel } from "@/types/property";
import { SearchInput, SearchList } from "@/components/search";

export interface SearchPageProps {
  searchParams: ISearchPropertyParams;
  data: IPropertyData[];
  user?: UserAuthModel;
}

export function SearchApp({ data, searchParams, user }: SearchPageProps) {
  return (<>
    <AppShell.Navbar>
      Hello World
    </AppShell.Navbar>
    <AppShell.Main>
      <SearchInput searchParams={searchParams} />
      <Space h="md" />
      {data ? <SearchList data={data} hasFavorite={!!user} /> : <></>}
    </AppShell.Main>
  </>
  )
}