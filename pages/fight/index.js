import LayoutMain from "@/component/layout/background";
import ContentWildBeast from "@/component/content/fight-pet";
import SkillList from "@/component/sidebar/skill-list";

export default function Fight() {
  return (
    <LayoutMain>
      <ContentWildBeast />
      <SkillList />
    </LayoutMain>
  );
}
