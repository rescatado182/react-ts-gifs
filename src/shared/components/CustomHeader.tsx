interface CustomHeaderProps {
    title: string;
    subtitle?: string;
}

export const CustomHeader = ({ title, subtitle }: CustomHeaderProps) => {
  return (
     <div className="content-center">
        <h1 className="montserrat-bold">{title}</h1>
        <p>{ subtitle ? subtitle : "Sin descripción" }</p>
    </div>
  )
}
