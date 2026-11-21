"use client";

import { Modal as AntModal } from "antd";
import Button from "@/ui-components/buttons/Button";
import styles from "./feedback.module.css";

/**
 * Confirm modal (e.g. "Leave booking?").
 * Primary action = the safe choice ("Keep booking"); secondary = ghost ("Leave").
 */
export default function Modal({
  open,
  title,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  confirmLoading = false,
  width = 420,
}) {
  return (
    <AntModal
      open={open}
      title={title}
      onCancel={onCancel}
      width={width}
      centered
      destroyOnHidden
      footer={
        <div className={styles.modalFooter}>
          <Button size="sm" onClick={onConfirm} loading={confirmLoading}>
            {confirmText}
          </Button>
          <Button size="sm" variant="ghost" onClick={onCancel}>
            {cancelText}
          </Button>
        </div>
      }
    >
      <div className={styles.modalBody}>{children}</div>
    </AntModal>
  );
}
