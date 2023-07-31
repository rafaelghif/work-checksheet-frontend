import Select, { GroupBase, Props } from "react-select";

const ReactSelect = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) => <Select {...props} />;

export default ReactSelect;