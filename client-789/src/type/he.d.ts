declare module "he" {
  export function decode(html: string): string;
  export function encode(html: string): string;
  // Có thể thêm các hàm khác nếu cần
}
