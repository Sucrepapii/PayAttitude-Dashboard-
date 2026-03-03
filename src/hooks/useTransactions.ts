import { useState, useMemo } from "react";
import { Transaction } from "../types";

export function useTransactions(initialTransactions: Transaction[] = []) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredTransactions = useMemo(() => {
    return initialTransactions.filter(
      (t) =>
        t.merchantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.merchantId.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [initialTransactions, searchQuery]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredTransactions.length / itemsPerPage);
  }, [filteredTransactions, itemsPerPage]);

  const paginatedTransactions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredTransactions.slice(start, start + itemsPerPage);
  }, [filteredTransactions, currentPage, itemsPerPage]);

  return {
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    filteredTransactions,
    paginatedTransactions,
    totalPages,
    totalEntries: filteredTransactions.length,
  };
}
