import LayoutMain from "@/component/layout/web";
import ContentMonsterList from "@/component/content/monster-list";
import SidebarMonsterList from "@/component/sidebar/monster-list";
import Head from "next/head";
export default function Monster() {
  return (
    <>
      <Head>
        <title>RO重生 - 材料搜尋</title>
      </Head>
      <LayoutMain>
        <ContentMonsterList />
        <SidebarMonsterList />
      </LayoutMain>
    </>
  );
}
