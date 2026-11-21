import TextField from "./TextField";

/** Success state — green border + "Looks good". */
export default function SuccessInput({ message = "Looks good", ...props }) {
  return <TextField {...props} status="success" message={message} />;
}
