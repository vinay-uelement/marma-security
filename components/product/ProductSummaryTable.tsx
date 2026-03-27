import Image from "next/image";

type CellValue = string | { check: true; label?: string };

export interface ProductSummaryColumn {
  key: string;
  label: string;
}

export interface ProductSummaryRow {
  category: string;
  values: Record<string, CellValue>;
}

interface ProductSummaryTableProps {
  title?: string;
  columns: ProductSummaryColumn[];
  rows: ProductSummaryRow[];
}

function CheckIcon() {
  return (
    <Image
      src="/images/product/checkmark.svg"
      alt="checkmark"
      width={18}
      height={16}
      className="shrink-0"
    />
  );
}

function Cell({ value }: { value: CellValue }) {
  if (typeof value === "string") {
    return (
      <span className="font-body text-[13px] sm:text-[14px] text-[#3A3A3A]">
        {value}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      <CheckIcon />
      {value.label && (
        <span className="font-body text-[13px] sm:text-[14px] text-[#3A3A3A]">
          {value.label}
        </span>
      )}
    </span>
  );
}

export default function ProductSummaryTable({
  title,
  columns,
  rows,
}: ProductSummaryTableProps) {
  return (
    <div className="w-full flex flex-col">
      {title && (
        <h2 className="fl2-4">
          {title}
        </h2>
      )}

      <div className="w-full overflow-x-auto rounded-2xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
        <table className="w-full min-w-[560px] border-collapse">
          {/* Header */}
          <thead>
            <tr>
              {/* Category column header — sticky */}
              <th
                className="fl5-1 font-title! px-5 py-3 sticky left-0 z-20 text-left  rounded-tl-2xl border-r border-dashed border-[#DDDDDD]/50"
                style={{
                  background:
                    "linear-gradient(180deg, #FFECEC 0%, #FFA9A9 100%)",
                  width: "26%",
                }}
              >
                Category/ Product
              </th>

              {/* Dynamic column headers */}
              {columns.map((col, i) => (
                <th
                  key={col.key}
                  className={`fl5-1 px-5 py-3 font-title! text-center  ${
                    i === columns.length - 1
                      ? "rounded-tr-2xl"
                      : "border-r border-dashed border-[#DDDDDD]/50"
                  }`}
                  style={{
                    background:
                      "linear-gradient(180deg, #FFECEC 0%, #FFA9A9 100%)",
                  }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={
                  rowIdx !== rows.length - 1
                    ? "border-b border-dashed border-[#DDDDDD]"
                    : ""
                }
              >
                {/* Category cell — sticky */}
                <td
                  className={`fl5 sticky left-0 z-10 px-5 py-4 border-r border-dashed border-[#DDDDDD] ${
                    rowIdx === rows.length - 1 ? "rounded-bl-2xl" : ""
                  }`}
                  style={{ background: "#FAF4F4" }}
                >
                  {row.category}
                </td>

                {/* Value cells */}
                {columns.map((col, colIdx) => (
                  <td
                    key={col.key}
                    className={`fl5-2 px-5 py-4 text-center  ${
                      colIdx !== columns.length - 1
                        ? "border-r border-dashed border-[#DDDDDD]"
                        : ""
                    } ${
                      rowIdx === rows.length - 1 &&
                      colIdx === columns.length - 1
                        ? "rounded-br-2xl"
                        : ""
                    }`}
                    style={{ background: "#F7F7F7" }}
                  >
                    <div className="flex items-center justify-start pl-2">
                      <Cell value={row.values[col.key] ?? "-"} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
