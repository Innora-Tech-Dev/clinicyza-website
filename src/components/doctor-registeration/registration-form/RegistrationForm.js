"use client";

import { useState } from "react";
import Link from "next/link";
import { Form } from "antd";
import { COUNTRIES, LANGUAGES, ROUTES } from "@/constants/constants";
import { submitDoctorRegistration } from "@/services/forms";
import Button from "@/ui-components/buttons/Button";
import { useToast } from "@/ui-components/feedback/Toast";
import {
  Checkbox, PhoneField, SelectField, TextAreaField, TextField,
} from "@/ui-components/inputs";
import styles from "./registrationForm.module.css";

const SPECIALTIES = [
  "General Practitioner",
  "Dermatology",
  "Gynaecology",
  "Paediatrics",
  "Psychiatry",
  "Travel Medicine",
].map((s) => ({ value: s, label: s }));

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({ value: c.value, label: c.label }));
const LANGUAGE_OPTIONS = LANGUAGES.map((l) => ({ value: l, label: l }));

export default function RegistrationForm() {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      await submitDoctorRegistration(values);
      toast.success("Application received", "Our clinical team will contact you within 3 working days.");
      form.resetFields();
    } catch (error) {
      toast.error("Couldn't submit application", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Apply to join</h2>
      <Form form={form} layout="vertical" requiredMark={false} onFinish={onFinish}>
        <div className={styles.row}>
          <Form.Item label="Full name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
            <TextField placeholder="Dr. Giulia Romano" autoComplete="name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email address" },
            ]}
          >
            <TextField placeholder="giulia.romano@email.it" autoComplete="email" />
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item label="Mobile" name="phone" rules={[{ required: true, message: "Please enter your number" }]}>
            <PhoneField placeholder="347 218 5590" />
          </Form.Item>
          <Form.Item label="Country of licence" name="country" rules={[{ required: true, message: "Please choose a country" }]}>
            <SelectField placeholder="Choose a country" options={COUNTRY_OPTIONS} />
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item label="Specialty" name="specialty" rules={[{ required: true, message: "Please choose a specialty" }]}>
            <SelectField placeholder="Choose a specialty" options={SPECIALTIES} />
          </Form.Item>
          <Form.Item
            label="Medical licence number"
            name="licenseNumber"
            rules={[{ required: true, message: "Please enter your licence number" }]}
          >
            <TextField placeholder="e.g. MI-123456" />
          </Form.Item>
        </div>
        <div className={styles.row}>
          <Form.Item label="Years of experience" name="years" rules={[{ required: true, message: "Please enter your experience" }]}>
            <TextField type="number" min={0} max={60} placeholder="12" />
          </Form.Item>
          <Form.Item label="Languages you consult in" name="languages" rules={[{ required: true, message: "Pick at least one language" }]}>
            <SelectField mode="multiple" placeholder="Select languages" options={LANGUAGE_OPTIONS} />
          </Form.Item>
        </div>
        <Form.Item label="About you (optional)" name="about">
          <TextAreaField placeholder="Your experience with telemedicine, special interests…" />
        </Form.Item>
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Please accept the terms")),
            },
          ]}
        >
          <Checkbox>
            I agree to the <Link href={ROUTES.terms}>Terms of service</Link> and{" "}
            <Link href={ROUTES.privacy}>Privacy policy</Link>
          </Checkbox>
        </Form.Item>
        <Button type="submit" icon="arrow" loading={submitting} loadingText="Submitting…">
          Submit application
        </Button>
      </Form>
    </div>
  );
}
