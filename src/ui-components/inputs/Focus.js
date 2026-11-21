import TextField from "./TextField";

/** Focus state rendered statically — violet border + 3px violet halo. */
export default function FocusInput(props) {
  return <TextField {...props} forceState="focus" />;
}
