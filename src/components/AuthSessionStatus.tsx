export interface Props {
  className: string
  status: string | null
}

export default function AuthSessionStatus({ status, className }: Props) {
  return (
    <>
      {status && (
        <div className={`${className} font-medium text-sm text-green-600`}>
          {status}
        </div>
      )}
    </>
  )
}
