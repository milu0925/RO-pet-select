import FightPet from "@/component/content/fight-pet";
import LayoutMain from "@/component/layout/web";
import SkillList from "@/component/sidebar/skill-list";
import Head from "next/head";
export default function Fight() {
  return (
    <>
      <Head>
        <title>RO重生 - 獸王搜尋</title>
      </Head>
      <LayoutMain>
        <FightPet />
        <SkillList />
      </LayoutMain>
    </>
  );
}
