'use client';

import { SpecsTableData } from '@/data/productsContent';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

interface SpecsTableProps {
  data: SpecsTableData;
}

export function SpecsTable({ data }: SpecsTableProps) {
  const { headers, rows } = data;

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-muted bg-white shadow-card-sm">
      <Table className="w-full text-sm">
        <Thead className="bg-cream">
          <Tr>
            {headers.map((header, idx) => (
              <Th
                key={idx}
                className="px-4 py-3 text-left font-semibold text-panel whitespace-nowrap border-b border-muted"
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIdx) => (
            <Tr
              key={rowIdx}
              className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-bg'}
            >
              {row.map((cell, cellIdx) => (
                <Td
                  key={cellIdx}
                  className="px-4 py-2 border-b border-muted align-top whitespace-nowrap text-text-main"
                >
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
