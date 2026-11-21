"use client";

import { Collapse } from "antd";
import { Minus, Plus } from "lucide-react";
import styles from "./feedback.module.css";

/**
 * FAQ accordion — items = [{ key, question, answer }].
 * Open item shows a navy "−", closed items a lavender "+".
 */
export default function Accordion({ items = [], defaultActiveKey, accordion = true, className = "" }) {
  return (
    <Collapse
      accordion={accordion}
      defaultActiveKey={defaultActiveKey ?? items[0]?.key}
      expandIconPlacement="end"
      bordered={false}
      className={`${styles.accordion} ${className}`}
      expandIcon={({ isActive }) => (
        <span className={`${styles.accordionIcon} ${isActive ? styles.accordionIconOpen : ""}`}>
          {isActive ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
        </span>
      )}
      items={items.map((item) => ({
        key: item.key,
        label: item.question,
        children: <p className={styles.accordionAnswer}>{item.answer}</p>,
      }))}
    />
  );
}
