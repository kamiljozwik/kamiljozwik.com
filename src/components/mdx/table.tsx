import { HTMLProps } from "react";

export const tableComponents = {
  table: (props: HTMLProps<HTMLTableElement>) => (<div className="overflow-x-auto max-w-[calc(100vw-2*24px)] md:max-w-full"><table {...props} /></div>),
  th: (props: HTMLProps<HTMLTableCellElement>) => <th {...props} />,
  td: (props: HTMLProps<HTMLTableCellElement>) => <td {...props} />,
};