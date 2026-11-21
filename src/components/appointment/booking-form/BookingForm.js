"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Form } from "antd";
import { COUNTRIES, PRICING, ROUTES } from "@/constants/constants";
import { SERVICES } from "@/data/services";
import { submitAppointment } from "@/services/forms";
import Button from "@/ui-components/buttons/Button";
import Icon from "@/ui-components/icons/Icon";
import Modal from "@/ui-components/feedback/Modal";
import Toast, { useToast } from "@/ui-components/feedback/Toast";
import Tooltip from "@/ui-components/feedback/Tooltip";
import StepIndicator from "@/ui-components/navigation/StepIndicator";
import {
  Checkbox, DateField, PhoneField, RadioCard, SelectField, TextAreaField, TextField,
} from "@/ui-components/inputs";
import styles from "./bookingForm.module.css";

const STEPS = ["Consultation", "Your details", "Confirm"];

// Fields validated before leaving each step
const STEP_FIELDS = [
  ["patient", "service", "reason"],
  ["name", "email", "dob", "country", "phone"],
  ["terms"],
];

const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: `${s.title} · ${PRICING.currency}${s.price}`,
}));

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({ value: c.value, label: c.label }));

export default function BookingForm({ initialService }) {
  const router = useRouter();
  const toast = useToast();
  const [form] = Form.useForm();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);

  const validService = SERVICES.some((s) => s.id === initialService) ? initialService : undefined;

  const next = async () => {
    try {
      await form.validateFields(STEP_FIELDS[step]);
      setStep((s) => s + 1);
    } catch {
      // antd shows the field errors
    }
  };

  const onFinish = async (values) => {
    setSubmitting(true);
    try {
      await submitAppointment({ ...values, dob: values.dob?.format("YYYY-MM-DD") });
      setDone(true);
      toast.success("Booking received", "A doctor will call you shortly.");
    } catch (error) {
      toast.error("Booking failed", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className={`${styles.card} ${styles.done}`}>
        <Toast type="success" title="Booking received" description="We've emailed your confirmation." />
        <h2 className={styles.title}>You&apos;re in the queue</h2>
        <p className="text-body">
          A doctor will call you by video, usually within {PRICING.averageWaitMinutes} minutes. Keep
          this page open or check your email.
        </p>
        <Button variant="secondary" href={ROUTES.home}>
          Back to home
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <StepIndicator steps={STEPS} current={step} className={styles.steps} />

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        initialValues={{ patient: "myself", service: validService, country: COUNTRIES[0].value }}
      >
        {/* Step 1 — Consultation */}
        <div hidden={step !== 0}>
          <h2 className={styles.title}>Who is the consultation for?</h2>
          <Form.Item name="patient">
            <RadioCard
              ariaLabel="Who is the consultation for"
              direction="horizontal"
              options={[
                { value: "myself", title: "Myself", description: "The account holder" },
                { value: "family", title: "A family member", description: "Child, partner or parent" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Service" name="service" rules={[{ required: true, message: "Please choose a service" }]}>
            <SelectField placeholder="Choose a service" options={SERVICE_OPTIONS} showSearch={{ optionFilterProp: "label" }} />
          </Form.Item>
          <Form.Item
            label="Reason for visit"
            name="reason"
            rules={[{ required: true, message: "Tell the doctor briefly what's wrong" }]}
          >
            <TextAreaField placeholder="Burning when urinating since Sunday, no fever." />
          </Form.Item>
        </div>

        {/* Step 2 — Your details */}
        <div hidden={step !== 1}>
          <h2 className={styles.title}>Your details</h2>
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
            <Form.Item label="Date of birth" name="dob" rules={[{ required: true, message: "Please enter your date of birth" }]}>
              <DateField />
            </Form.Item>
            <Form.Item label="Country" name="country" rules={[{ required: true, message: "Please choose a country" }]}>
              <SelectField options={COUNTRY_OPTIONS} />
            </Form.Item>
          </div>
          <Form.Item label="Mobile" name="phone" rules={[{ required: true, message: "We need a number in case the video drops" }]}>
            <PhoneField placeholder="347 218 5590" />
          </Form.Item>
        </div>

        {/* Step 3 — Confirm */}
        <div hidden={step !== 2}>
          <h2 className={styles.title}>Confirm & book</h2>
          <p className={`text-body ${styles.secure}`}>
            <Icon name="lock" size={18} />
            Encrypted video consultation
            <Tooltip title="Your data is stored on EU servers only.">
              <button type="button" className={styles.info} aria-label="Data storage info">
                <Icon name="info" size={16} />
              </button>
            </Tooltip>
          </p>
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
              I agree to the <Link href={ROUTES.terms}>Terms of service</Link>
            </Checkbox>
          </Form.Item>
          <Form.Item name="healthNotes" valuePropName="checked">
            <Checkbox>Email me health notes</Checkbox>
          </Form.Item>
        </div>

        <div className={styles.actions}>
          <Button variant="ghost" onClick={() => (step === 0 ? setLeaveOpen(true) : setStep((s) => s - 1))}>
            {step === 0 ? "Cancel" : "Back"}
          </Button>
          {step < STEPS.length - 1 ? (
            <Button onClick={next} icon="arrow">
              Continue
            </Button>
          ) : (
            <Button type="submit" loading={submitting} icon="arrow">
              Book consultation
            </Button>
          )}
        </div>
      </Form>

      <Modal
        open={leaveOpen}
        title="Leave booking?"
        confirmText="Keep booking"
        cancelText="Leave"
        onConfirm={() => setLeaveOpen(false)}
        onCancel={() => router.push(ROUTES.home)}
      >
        Your answers so far will be lost.
      </Modal>
    </div>
  );
}
