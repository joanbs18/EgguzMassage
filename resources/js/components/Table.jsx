import { useState } from "react";
import "../../css/table.css";
import { Pagination } from "antd";

export default function Table({ columns, renderRow, data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const startIndex = (currentPage - 1) * pageSize;
    const currentPageData = data.slice(startIndex, startIndex + pageSize);

    return (
        <div className="table-container">
            {data.length === 0 ? (
                <table className="custom-table">
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={columns.length} style={{ textAlign: "center" }}>No hay datos disponibles</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <>
                    <table className="custom-table">
                        <thead>
                            <tr>
                                {columns.map((col, index) => (
                                    <th key={index}>{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentPageData.length > 0 ? (
                                currentPageData.map((row, index) => renderRow(row, index))
                            ) : (
                                <tr>
                                    <td colSpan={columns.length} style={{ textAlign: "center" }}>No hay datos disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination
                        current={currentPage}
                        total={data.length}
                        pageSize={pageSize}
                        onChange={(page) => setCurrentPage(page)}
                        onShowSizeChange={(current, size) => setPageSize(size)}
                        showSizeChanger
                        showQuickJumper
                    />
                </>
            )}
        </div>
    );
}
