import { useEffect, useState } from "react";
import { Select as AntdSelect, Spin } from "antd";
import "antd/es/select/style";
import "antd/es/spin/style";

const CustomSelect = ({
    apiUrl,
    placeholder = "Seleccione una opción",
    onChange,
    value,
    name,
    valueKey = "value",
    labelKey = "label",
}) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(apiUrl, { signal });

                if (!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                setOptions(
                    data.map((item) => ({
                        value: item[valueKey],
                        label: item[labelKey],
                    }))
                );
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError("No se pudieron cargar las opciones.");
                    console.error(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort(); 
    }, [apiUrl, valueKey, labelKey]);

    return (
        <AntdSelect
            showSearch
            placeholder="Seleccione un servicio"
            value={value || null}
            optionFilterProp="label"
            filterOption={(input, option) =>
                option?.label?.toLowerCase().includes(input.toLowerCase())
            }
            onChange={(selectedValue) => onChange(selectedValue)}
            loading={loading}
            options={options}
            notFoundContent={
                loading ? <Spin /> : error || "No hay opciones disponibles"
            }
            style={{ width: "100%", marginBottom: "2rem" }}
        />
    );
};

export default CustomSelect;
