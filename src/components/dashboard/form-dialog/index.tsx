import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";

export function FormDialog() {
  const { isPending } = useMutation({ mutationFn: async () => {} });
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add HR Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add HR</DialogTitle>
            <DialogDescription>
              Create new HR&apos;s account. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="fullname">Fullname</Label>
              <Input id="fullname" name="fullname" placeholder="Fullname" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="birthdate">Birthdate</Label>
              <Input id="birthdate" name="birthdate" type="date" />
            </div>
            <div className="grid gap-3">
              <Label>Gender</Label>
              <RadioGroup defaultValue="MALE" className="mb-3" name="gender">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="male" value="MALE" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="female" value="FEMALE" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Create account"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
