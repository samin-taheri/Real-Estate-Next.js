// Table.tsx
import React from 'react';
import TableRow from './table-row';

const Table: React.FC = () => {
  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-md bg-gray-100 rounded-tl rounded-bl"></th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Residence Permit</th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Citizenship</th>
          <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-md bg-gray-100 rounded-tr rounded-br"></th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          title="Terms and conditions for buying real estate"
          permitValue="From $75,000"
          citizenshipValue="From $400,000"
        />
        <TableRow
          title="Validity period"
          permitValue="Up to 2 years"
          citizenshipValue="Indefinitely"
        />
        <TableRow
          title="Time to receive"
          permitValue="1-2 months"
          citizenshipValue="3-6 months"
        />
        <TableRow
          title="Getting for family members"
          permitValue="Spouse and children under 18"
          citizenshipValue="Spouse and children under 21"
        />
        <TableRow
          title="Travelling without a visa"
          permitValue="No"
          citizenshipValue="More than 110 countries"
        />
        <TableRow
          title="Employment"
          permitValue="No"
          citizenshipValue="Yes"
        />
      </tbody>
    </table>
  );
};

export default Table;
