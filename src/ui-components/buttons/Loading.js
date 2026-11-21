import Button from "./Button";

/** Loading state — spinner + optional loadingText ("Processing…"). */
export default function LoadingButton({ loadingText = "Processing…", ...props }) {
  return <Button {...props} loading loadingText={loadingText} />;
}
