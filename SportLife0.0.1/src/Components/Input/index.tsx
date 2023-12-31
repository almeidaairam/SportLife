import { InputHTMLAttributes } from "react";
import './input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps){
  return(
    <input
      {...props}
    />
  )
}