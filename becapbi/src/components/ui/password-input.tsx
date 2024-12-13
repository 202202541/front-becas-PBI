import * as React from "react"
import { Input } from '@/components/ui/input'
import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setshowPassword] = React.useState(false)

    return (
      <div className="relative">
        <Input 
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          {...props}
          ref={ref}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setshowPassword(!showPassword)}
        >
          {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeOffIcon className="h-5 w-5" />}
        </button>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
