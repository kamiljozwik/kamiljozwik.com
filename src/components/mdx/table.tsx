import { HTMLProps } from "react";

export const tableComponents = {
  table: (props: HTMLProps<HTMLTableElement>) => (<table {...props} />),
  th: (props: HTMLProps<HTMLTableCellElement>) => <th {...props} />,
  td: (props: HTMLProps<HTMLTableCellElement>) => <td {...props} />,
};