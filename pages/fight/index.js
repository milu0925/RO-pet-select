import ContentWildBeast from "@/component/content/fight-pet";
import LayoutMain from "@/component/layout/web";
import SkillList from "@/component/sidebar/skill-list";
export default function Fight() {
  return (
    <LayoutMain>
      <ContentWildBeast />
      <SkillList />
    </LayoutMain>
  );
}
