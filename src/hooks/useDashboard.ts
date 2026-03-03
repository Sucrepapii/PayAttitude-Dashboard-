import { useState, useMemo } from "react";
import { DateRange, FilterPeriod } from "../types";

export function useDashboard() {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null,
  });
  const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>("Today");
  const [showDatePicker, setShowDatePicker] = useState(false);

  return {
    dateRange,
    setDateRange,
    filterPeriod,
    setFilterPeriod,
    showDatePicker,
    setShowDatePicker,
  };
}
