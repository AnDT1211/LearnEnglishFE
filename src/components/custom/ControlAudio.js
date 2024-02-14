import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function ControlAudio() {
  return <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Control</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Control Audio</DialogTitle>
          <DialogDescription>
            How to control the audio during the listening section
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Pause:
            </Label>
            <Input
              id="name"
              defaultValue="ctr + space"
              className="col-span-3"
              disabled="true"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Backward:
            </Label>
            <Input
              id="username"
              defaultValue="` (below escape button)"
              className="col-span-3"
              disabled="true"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </>
}