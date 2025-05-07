import React from "react";
import DatePicker from "antd/es/date-picker";
import Space from "antd/es/space";
import ConfigProvider from "antd/es/config-provider";
import esES from "antd/es/locale/es_ES";
import "antd/es/date-picker/style"; 
import "antd/es/space/style";
import "antd/es/config-provider/style";


export default function Calendario({ onDateSelect, setHoras }) {
    const hoy = new Date();

    const disablePastDates = (current) => {
        return current && current < hoy.setHours(0, 0, 0, 0); // Deshabilita días antes de hoy
    };

    const onChange = (date, dateString) => {
        if (date) { // Verifica que 'date' no sea null o undefined
            if (onDateSelect) {
                onDateSelect(dateString); // Llama a la función pasada como prop con la fecha válida
            }
        } else {
            setHoras([]);
        }
    };

    return (
        <ConfigProvider locale={esES}>
            <Space direction="vertical">
                <DatePicker
                    onChange={onChange}
                    style={{
                        width: "100%",
                        padding: "1rem",
                        marginBottom: "2rem",
                    }}
                    disabledDate={disablePastDates}
                />
            </Space>
        </ConfigProvider>
    );
}
