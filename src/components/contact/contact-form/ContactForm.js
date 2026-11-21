"use client";

import { useState } from "react";
import Link from "next/link";
import { Form } from "antd";
import { ROUTES } from "@/constants/constants";
import { submitContactForm } from "@/services/forms";
import Button from "@/ui-components/buttons/Button";
import { useToast } from "@/ui-components/feedback/Toast";
import {
  Checkbox, PhoneField, SelectField, TextAreaField, TextField,
} from "@/ui-components/inputs";
import styles from "./contactForm.module.css";

const TOPICS = [
  { value: "booking", label: "A booking" },
  { value: "billing", label: "Billing & payments" },
  { value: "prescription", label: "Prescriptions" },
  { value: "account", label: "My account" },
  { value: "other", label: "Something else" },
];

export default function ContactForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      await submitContactForm(values);
      toast.success("Message sent", "We'll reply within one working day.");
      form.resetFields();
    } catch (error) {
      toast.error("Couldn't send message", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Send us a message</h2>
      <Form form={form} layout="vertical" requiredMark={false} onFinish={onFinish}>
        <div className={styles.row}>
          <Form.Item label="Full name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
            <TextField placeholder="Giulia Rossi" autoComplete="name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email address" },
            ]}
          >
            <TextField placeholder="giulia.rossi@email.it" autoComplete="email" />
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item label="Mobile (optional)" name="phone">
            <PhoneField placeholder="347 218 5590" />
          </Form.Item>
          <Form.Item label="Topic" name="topic" rules={[{ required: true, message: "Please choose a topic" }]}>
            <SelectField placeholder="Choose a topic" options={TOPICS} />
          </Form.Item>
        </div>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: "Please write a message" }]}>
          <TextAreaField placeholder="How can we help?" />
        </Form.Item>
        <Form.Item
          name="consent"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Please accept the privacy policy")),
            },
          ]}
        >
          <Checkbox>
            I agree to the <Link href={ROUTES.privacy}>Privacy policy</Link>
          </Checkbox>
        </Form.Item>
        <Button type="submit" icon="arrow" loading={submitting} loadingText="Sending…">
          Send message
        </Button>
      </Form>
    </div>
  );
}
