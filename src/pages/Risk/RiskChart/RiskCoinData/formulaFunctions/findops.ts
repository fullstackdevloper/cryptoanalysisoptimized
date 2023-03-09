export function findOps(s: any) {
    for (var i = 0; i < s.length; i++) {
      if (s[i] == "+")
        return "+";
      if (s[i] == "-")
        return "-";
      if (s[i] == "*")
        return "*";
      if (s[i] == "/")
        return "/";
    }
  }