import { HTMLProps } from "react";

export const tableComponents = {
  table: (props: HTMLProps<HTMLTableElement>) => (<div className="overflow-x-scroll"><table {...props} /></div>),
  th: (props: HTMLProps<HTMLTableCellElement>) => <th {...props} />,
  td: (props: HTMLProps<HTMLTableCellElement>) => <td {...props} />,
};