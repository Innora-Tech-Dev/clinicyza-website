import TextField from "./TextField";

/** Error state — red border + error message (e.g. "Enter a valid email address"). */
export default function ErrorInput({ message = "Please check this field", ...props }) {
  return <TextField {...props} status="error" message={message} />;
}
