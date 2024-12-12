import { createContext } from "react";

// crea context
const DateFormatContext = createContext();

// funzione per formattare la data
const formatIsoDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDay()).padStart(2, "0"); // formattazione giorno
    const month = String(date.getMonth() + 1).padStart(2, "0"); // formattazione mese
    const year = date.getFullYear(); // formattazione anno

    // ritorno data completa
    return `${day}/${month}/${year}`;
}

// componente provider
export const FormatDateProvider = ({ children }) => {

    // funzione nella funzione
    const formatDate = (isoString) => {
        return formatIsoDate(isoString);
    }

    return (
        <DateFormatContext.Provider value={{ formatDate }}>
            {children}
        </DateFormatContext.Provider>
    )
}
export default DateFormatContext;