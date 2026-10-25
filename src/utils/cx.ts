export type ClassName = string | false | null | undefined

export function cx (...values: ClassName[]): string {
  return values.filter(Boolean).join(' ')
}
