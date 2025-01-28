import Welcome from "./Welcome";
import Code from "./Code";


export default function ConditionalComponent() {
  let message;
  const display = true;
  return  display ? <Welcome /> : <Code />;
}
