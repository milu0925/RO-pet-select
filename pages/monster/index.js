import LayoutMain from "@/component/layout/web";
import ContentMonsterList from "@/component/content/monster-list";
import MonsterList from "@/component/sidebar/monster-list";
export default function Monster() {
  return (
    <LayoutMain>
      <ContentMonsterList />
      <MonsterList />
    </LayoutMain>
  );
}
