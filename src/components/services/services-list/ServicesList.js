"use client";

import { useMemo, useState } from "react";
import { PRICING, ROUTES } from "@/constants/constants";
import { SERVICE_CATEGORIES, SERVICES } from "@/data/services";
import Button from "@/ui-components/buttons/Button";
import ServiceCard from "@/ui-components/cards/ServiceCard";
import EmptyState from "@/ui-components/feedback/EmptyState";
import SearchField from "@/ui-components/inputs/SearchField";
import FilterTabs from "@/ui-components/navigation/FilterTabs";
import Pagination from "@/ui-components/navigation/Pagination";
import styles from "./servicesList.module.css";

const PAGE_SIZE = 6;

export default function ServicesList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SERVICES.filter(
      (s) =>
        (category === "all" || s.category === category) &&
        (!q || `${s.title} ${s.description}`.toLowerCase().includes(q)),
    );
  }, [query, category]);

  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.toolbar}>
          <FilterTabs
            options={SERVICE_CATEGORIES}
            value={category}
            onChange={(value) => {
              setCategory(value);
              setPage(1);
            }}
          />
          <SearchField
            id="service-search"
            fieldClassName={styles.search}
            aria-label="Search services"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {visible.length > 0 ? (
          <div className={styles.grid}>
            {visible.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard
                  category={service.categoryLabel}
                  duration={service.duration}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  bookHref={`${ROUTES.appointment}?service=${service.id}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title={`No services match “${query}”`}
            description={`Try a broader term, or talk to a GP from ${PRICING.currency}${PRICING.consultationFrom}.`}
            action={
              <Button size="sm" href={ROUTES.appointment} icon="arrow">
                Talk to a GP
              </Button>
            }
          />
        )}

        {filtered.length > PAGE_SIZE && (
          <div className={styles.pagination}>
            <Pagination current={page} pageSize={PAGE_SIZE} total={filtered.length} onChange={setPage} />
          </div>
        )}
      </div>
    </section>
  );
}
