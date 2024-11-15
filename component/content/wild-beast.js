import Select from "../select";
import CardList from "./card-list";
export default function ContentWildBeast() {
  return (
    <div className="content">
      <div className="top">
        <Select />
        <Select />
        <Select />
        <button className="question">
          <i className="icon-question"></i>
        </button>
      </div>
      <div className="bottom">
        <CardList />
      </div>
    </div>
  );
}
