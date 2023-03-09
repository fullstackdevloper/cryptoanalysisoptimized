import { findOps } from "./findops";

export function calc(input: any) {
    switch (findOps(input)) {
      case "+":
        var a = input.split("+");
        return a;
        break;
      case "-":
        var a = input.split("-");
        return a;
        break;
      case "*":
        var a = input.split("*");
        return a;
        break;
      case "/":
        var a = input.split("/");
        return a;
        break;
    }
  }