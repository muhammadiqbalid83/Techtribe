import { Button } from "@/components/ui/button";

export default function MenuItem({ onClick, label }) {
  return (
    <>
      <Button onClick={onClick}>{label}</Button>
    </>
  );
}
