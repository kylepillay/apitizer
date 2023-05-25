import { RefObject } from "react";
import { useCodeEditor } from "../../../hooks/useCodeEditor";

export default function CodeEditor({ value, onChange, extensions = [] }: { value: any, onChange: any, extensions?: [], paneValue: any, setPaneValue: any }) {
  const ref = useCodeEditor({ value, onChange, extensions });

  return <div ref={ref as RefObject<HTMLDivElement>} />;
}