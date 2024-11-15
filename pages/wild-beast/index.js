import LayoutMain from "@/component/layout/background";
import ContentWildBeast from "@/component/content/wild-beast";
import SkillList from "@/component/sidebar/skill-list";

export default function WildBeast() {
  return (
    <LayoutMain>
      <ContentWildBeast />
      <SkillList />
    </LayoutMain>
  );
}
