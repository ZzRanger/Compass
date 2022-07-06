import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack className="h-full" direction="row">
      <div className="h-screen w-5/6 bg-slate-100">Kanban board</div>{" "}
      <div className="bg-red-200 w-1/6">Utils</div>
    </Stack>
  );
}
