"use client";

import { App } from "antd";
import { CircleAlert, CircleCheck, Info, X } from "lucide-react";
import styles from "./feedback.module.css";

const ICONS = { success: CircleCheck, error: CircleAlert, info: Info };

/**
 * Static toast card (e.g. "Prescription sent — Farmacia Centrale, Milan").
 * For pop-up toasts use the useToast() hook below.
 */
export default function Toast({ type = "success", title, description, onClose }) {
  const IconCmp = ICONS[type] ?? Info;
  return (
    <div className={styles.toast} role={type === "error" ? "alert" : "status"}>
      <span className={`${styles.toastIcon} ${styles[`toast_${type}`]}`}>
        <IconCmp size={18} strokeWidth={2} />
      </span>
      <div className={styles.toastText}>
        <p className={styles.toastTitle}>{title}</p>
        {description && <p className={styles.toastDescription}>{description}</p>}
      </div>
      {onClose && (
        <button type="button" className={styles.toastClose} onClick={onClose} aria-label="Close">
          <X size={16} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

/**
 * Pop-up toasts styled like the design.
 *   const toast = useToast();
 *   toast.success("Prescription sent", "Farmacia Centrale, Milan");
 */
export function useToast() {
  const { notification } = App.useApp();

  const open = (type) => (title, description) => {
    const IconCmp = ICONS[type];
    notification.open({
      title,
      description,
      placement: "topRight",
      icon: (
        <span className={`${styles.toastIcon} ${styles[`toast_${type}`]}`}>
          <IconCmp size={18} strokeWidth={2} />
        </span>
      ),
      className: styles.toastPopup,
    });
  };

  return { success: open("success"), error: open("error"), info: open("info") };
}
