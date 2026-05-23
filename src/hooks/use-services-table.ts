import { useEffect, useMemo, useState } from 'react';

import type { Service } from '@/types/interfaces/service';

export type ServiceSortField = 'name' | 'price';
export type ServiceSortDirection = 'asc' | 'desc';

interface UseServicesTableResult {
  search: string;
  setSearch: (value: string) => void;
  sortField: ServiceSortField;
  sortDirection: ServiceSortDirection;
  toggleSort: (field: ServiceSortField) => void;
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  paginatedServices: Service[];
  totalResults: number;
  totalPages: number;
  showingFrom: number;
  showingTo: number;
}

function compareServices(
  a: Service,
  b: Service,
  field: ServiceSortField,
  direction: ServiceSortDirection,
) {
  const multiplier = direction === 'asc' ? 1 : -1;

  if (field === 'price') {
    return (a.price - b.price) * multiplier;
  }

  return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }) * multiplier;
}

export function useServicesTable(
  services: Service[] | undefined,
): UseServicesTableResult {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState<ServiceSortField>('name');
  const [sortDirection, setSortDirection] = useState<ServiceSortDirection>('asc');

  const filteredServices = useMemo(() => {
    if (!services?.length) {
      return [];
    }

    const query = search.trim().toLowerCase();

    const matched = query
      ? services.filter((service) => {
          const nameMatch = service.name.toLowerCase().includes(query);
          const descriptionMatch = service.description
            ?.toLowerCase()
            .includes(query);

          return nameMatch || Boolean(descriptionMatch);
        })
      : services;

    return [...matched].sort((a, b) =>
      compareServices(a, b, sortField, sortDirection),
    );
  }, [services, search, sortField, sortDirection]);

  const totalResults = filteredServices.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize));

  useEffect(() => {
    setPage(1);
  }, [search, pageSize, sortField, sortDirection]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedServices = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredServices.slice(start, start + pageSize);
  }, [filteredServices, page, pageSize]);

  const showingFrom = totalResults === 0 ? 0 : (page - 1) * pageSize + 1;
  const showingTo = Math.min(page * pageSize, totalResults);

  const toggleSort = (field: ServiceSortField) => {
    if (sortField === field) {
      setSortDirection((current) => (current === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortField(field);
    setSortDirection('asc');
  };

  return {
    search,
    setSearch,
    sortField,
    sortDirection,
    toggleSort,
    page,
    setPage,
    pageSize,
    setPageSize,
    paginatedServices,
    totalResults,
    totalPages,
    showingFrom,
    showingTo,
  };
}
