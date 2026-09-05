const decoders = {
  c: {
    label: "C",
    content: `#define XOR_KEY 0xNN

unsigned char buf[] = "...";
for (int i = 0; i < sizeof(buf); i++) {
    buf[i] ^= XOR_KEY;
}`
  },

  python: {
    label: "Python3",
    content: `enc_shellcode = b"...."
key = 0xNN

dec_shellcode = bytes(b ^ key for b in enc_shellcode)`
  },

  // Example
  /*
  go: {
    label: "Go decoder",
    content: `package main
import "fmt"
func main() {
    fmt.Println("TODO")
}`
  }
  */
};