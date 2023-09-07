// TableRow.tsx
import React from 'react';

interface TableRowProps {
  title: string;
  permitValue: string;
  citizenshipValue: string;
  icon?: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ title, permitValue, citizenshipValue, icon }) => {
  return (
    <tr>
      <td className="px-4 py-3 border-b">{icon}</td>
      <td className="px-4 py-3 border-b">{title}</td>
      <td className="px-4 py-3 border-b">{permitValue}</td>
      <td className="px-4 py-3 border-b">{citizenshipValue}</td>
      <td className="w-10 text-center border-b"></td>
    </tr>
  );
};

export default TableRow;
