interface TableProps {
  columns: string[];
  data: Record<string, any>[];
  striped?: boolean;
}

export default function Table({ columns, data, striped = false }: TableProps) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "'Inter', sans-serif",
        fontSize: "16px",
        background: "#FFFFFF",
        border: "1px solid #E4E0D6",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <thead>
        <tr style={{ background: "#1F4B43" }}>
          {columns.map((col) => (
            <th
              key={col}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                color: "#F4F1EA",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            style={{
              background: striped && i % 2 === 1 ? "#F4F1EA" : "#FFFFFF",
              borderTop: "1px solid #EDEAE2",
            }}
          >
            {columns.map((col) => {
              const key = col.toLowerCase();
              return (
                <td
                  key={col}
                  style={{ padding: "12px 16px", color: "#3A362F" }}
                >
                  {row[key]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
